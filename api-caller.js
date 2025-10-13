// API Caller Script
// Gọi 5 API song song với Promise.all, dừng nếu có lỗi
//@ts-nocheck
const API_URL = 'https://agentrouter.org/api/user/aff_transfer';
const QUOTA = 500000;
const BATCH_SIZE = 10; // Số API gọi song song mỗi lần
const INTERVAL = 5000; // 5 seconds giữa các batch
const MAX_RETRIES = 1; // Số lần retry tối đa
const RETRY_DELAY = 2000; // Delay 2 giây giữa các lần retry
const ERROR_RETRY_DELAY = 30000; // Delay 10 giây khi batch bị lỗi
const MAX_BATCH_RETRIES = 3; // Số lần retry tối đa cho batch bị lỗi

// Headers configuration
const headers = {
  'Accept': 'application/json, text/plain, */*',
  'Accept-Language': 'vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7,zh-CN;q=0.6,zh;q=0.5,ja;q=0.4',
  'Cache-Control': 'no-store',
  'Connection': 'keep-alive',
  'Content-Type': 'application/json',
  'Cookie': '_ga=GA1.1.1387906875.1760330478; session=MTc2MDMzMDY3N3xEWDhFQVFMX2dBQUJFQUVRQUFEXzRmLUFBQWNHYzNSeWFXNW5EQVVBQTJGbVpnWnpkSEpwYm1jTUJnQUVjakI0U2daemRISnBibWNNRFFBTGIyRjFkR2hmYzNSaGRHVUdjM1J5YVc1bkRBNEFERmRSU0V3MFkweFdWVXBHT1FaemRISnBibWNNQkFBQ2FXUURhVzUwQkFRQV91VU1Cbk4wY21sdVp3d0tBQWgxYzJWeWJtRnRaUVp6ZEhKcGJtY01EZ0FNWjJsMGFIVmlYekk1TXpFNEJuTjBjbWx1Wnd3R0FBUnliMnhsQTJsdWRBUUNBQUlHYzNSeWFXNW5EQWdBQm5OMFlYUjFjd05wYm5RRUFnQUNCbk4wY21sdVp3d0hBQVZuY205MWNBWnpkSEpwYm1jTUNRQUhaR1ZtWVhWc2RBPT18Yhp7lTEoCiKWa3RcxPW2yiEldk1EHuy33Y5_QSeyudM=; acw_tc=0a0ccab417603382644055677e485a8ec8bab0397967973abcbb2309c9a0e9; _ga_PY29DXE5ZT=GS2.1.s1760338261$o3$g1$t1760338981$j34$l0$h0',
  'New-API-User': '29318',
  'Origin': 'https://agentrouter.org',
  'Referer': 'https://agentrouter.org/console/topup',
  'Sec-Fetch-Dest': 'empty',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Site': 'same-origin',
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
  'sec-ch-ua': '"Google Chrome";v="141", "Not?A_Brand";v="8", "Chromium";v="141"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"macOS"'
};

// Request body
const requestBody = {
  quota: 500000
};

// Function to make API call with retry
async function makeApiCall(callNumber, retryCount = 0) {
  try {
    const retryText = retryCount > 0 ? ` (Retry ${retryCount}/${MAX_RETRIES})` : '';
    console.log(
      `[${new Date().toISOString()}] Starting call #${callNumber}${retryText}...`,
    );

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(requestBody),
    });

    const data = await response.json();

    console.log(`[${new Date().toISOString()}] Call #${callNumber} completed`);
    console.log(`Status: ${response.status}`);
    console.log(`Response:`, JSON.stringify(data, null, 2));

    // Kiểm tra nếu response có success = false
    if (data.success === false) {
      console.error(`❌ Call #${callNumber} returned success=false`);
      
      // Retry nếu còn lần retry
      if (retryCount < MAX_RETRIES) {
        console.log(`🔄 Retrying call #${callNumber}... (${retryCount + 1}/${MAX_RETRIES})`);
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
        return makeApiCall(callNumber, retryCount + 1);
      }
      
      return {
        success: false,
        callNumber,
        status: response.status,
        data,
        shouldStop: true,
        retriedTimes: retryCount,
      };
    }

    return {
      success: true,
      callNumber,
      status: response.status,
      data,
      shouldStop: false,
      retriedTimes: retryCount,
    };
  } catch (error) {
    console.error(`❌ Call #${callNumber} error:`, error.message);
    
    // Retry nếu còn lần retry
    if (retryCount < MAX_RETRIES) {
      console.log(`🔄 Retrying call #${callNumber} after error... (${retryCount + 1}/${MAX_RETRIES})`);
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
      return makeApiCall(callNumber, retryCount + 1);
    }
    
    return {
      success: false,
      callNumber,
      error: error.message,
      shouldStop: true,
      retriedTimes: retryCount,
    };
  }
}

// Function to run batch of API calls with Promise.all
async function runBatch(batchNumber, startIndex, batchRetryCount = 0) {
  const retryText = batchRetryCount > 0 ? ` (Batch Retry ${batchRetryCount}/${MAX_BATCH_RETRIES})` : '';
  console.log(`\n🚀 Starting Batch #${batchNumber} (calls ${startIndex}-${startIndex + BATCH_SIZE - 1})${retryText}`);
  
  try {
    // Tạo array của promises
    const promises = [];
    for (let i = 0; i < BATCH_SIZE; i++) {
      const callNumber = startIndex + i;
      promises.push(makeApiCall(callNumber));
    }
    
    // Gọi tất cả API cùng lúc
    const results = await Promise.all(promises);
    
    // Kiểm tra nếu có API nào trả về success=false hoặc error
    const hasError = results.some((r) => r.shouldStop);
    
    if (hasError) {
      console.log('\n⚠️  Phát hiện lỗi hoặc success=false trong batch!');
      
      // Retry batch nếu còn lần retry
      if (batchRetryCount < MAX_BATCH_RETRIES) {
        console.log(`🔄 Chờ ${ERROR_RETRY_DELAY / 1000}s rồi retry batch #${batchNumber}... (${batchRetryCount + 1}/${MAX_BATCH_RETRIES})`);
        await new Promise((resolve) => setTimeout(resolve, ERROR_RETRY_DELAY));
        return runBatch(batchNumber, startIndex, batchRetryCount + 1);
      }
      
      console.log('❌ Batch đã retry hết số lần cho phép, dừng lại!');
      return { results, shouldStop: true, batchRetried: batchRetryCount };
    }
    
    console.log(`✅ Batch #${batchNumber} hoàn thành thành công`);
    return { results, shouldStop: false, batchRetried: batchRetryCount };
  } catch (error) {
    console.error(`❌ Batch #${batchNumber} error:`, error.message);
    
    // Retry batch nếu còn lần retry
    if (batchRetryCount < MAX_BATCH_RETRIES) {
      console.log(`🔄 Chờ ${ERROR_RETRY_DELAY / 1000}s rồi retry batch #${batchNumber}... (${batchRetryCount + 1}/${MAX_BATCH_RETRIES})`);
      await new Promise((resolve) => setTimeout(resolve, ERROR_RETRY_DELAY));
      return runBatch(batchNumber, startIndex, batchRetryCount + 1);
    }
    
    console.log('❌ Batch đã retry hết số lần cho phép, dừng lại!');
    return { 
      results: [], 
      shouldStop: true, 
      batchRetried: batchRetryCount,
      error: error.message 
    };
  }
}

// Function to run all API calls
async function runApiCalls() {
  console.log('========================================');
  console.log('🎯 Starting API Caller với Promise.all & Retry');
  console.log(`Batch size: ${BATCH_SIZE} calls per batch`);
  console.log(`Interval: ${INTERVAL / 1000} seconds between batches`);
  console.log(`Max retries per call: ${MAX_RETRIES} times`);
  console.log(`Max retries per batch: ${MAX_BATCH_RETRIES} times`);
  console.log(`Retry delay: ${RETRY_DELAY / 1000} seconds`);
  console.log(`Batch error retry delay: ${ERROR_RETRY_DELAY / 1000} seconds`);
  console.log(`Quota per call: ${QUOTA}`);
  console.log('========================================');

  const allResults = [];
  let batchNumber = 1;
  let callIndex = 1;
  let shouldStop = false;
  let totalBatchRetries = 0;

  // Chạy liên tục cho đến khi gặp lỗi
  while (!shouldStop) {
    const { results, shouldStop: stop, batchRetried } = await runBatch(batchNumber, callIndex);
    allResults.push(...results);
    shouldStop = stop;
    totalBatchRetries += batchRetried || 0;
    
    if (!shouldStop) {
      console.log(`\n⏳ Chờ ${INTERVAL / 1000} giây trước batch tiếp theo...`);
      await new Promise((resolve) => setTimeout(resolve, INTERVAL));
      batchNumber++;
      callIndex += BATCH_SIZE;
    }
  }

  // Summary
  console.log('\n========================================');
  console.log('📊 API Calls Summary');
  console.log('========================================');
  const successful = allResults.filter((r) => r.success).length;
  const failed = allResults.filter((r) => !r.success).length;
  const totalRetries = allResults.reduce((sum, r) => sum + (r.retriedTimes || 0), 0);
  const callsWithRetry = allResults.filter((r) => r.retriedTimes > 0).length;
  
  console.log(`Total calls made: ${allResults.length}`);
  console.log(`Total batches: ${batchNumber}`);
  console.log(`✅ Successful: ${successful}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`🔄 Total call retries: ${totalRetries}`);
  console.log(`🔄 Calls needed retry: ${callsWithRetry}`);
  console.log(`🔄 Total batch retries: ${totalBatchRetries}`);
  console.log('========================================\n');

  return allResults;
}

// Run the script
console.log('🔥 Bắt đầu chạy script...\n');
runApiCalls()
  .then(() => {
    console.log('✅ Script hoàn thành!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Lỗi khi chạy script:', error);
    process.exit(1);
  });

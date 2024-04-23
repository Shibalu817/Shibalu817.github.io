document.addEventListener("DOMContentLoaded", function () {
    const dataContainer = document.getElementById('arduinoData');
    function updateStatus() {
        fetch('/http://172.20.10.9/hello')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();  // 或 response.json() 如果數據是 JSON 格式
            })
            .then(data => {
                dataContainer.innerText = data; // 更新頁面上的元素以顯示數據
            })
            .catch(error => {
                console.error('Failed to fetch data:', error);
                dataContainer.innerText = '無法加載數據';
            });
    }

    setInterval(updateStatus, 5000);  // 每 5 秒更新狀態
});

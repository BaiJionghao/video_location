// 模拟多个视频的数据
const data = [
    {
        video: './videos/s27-d50.mp4',
        text: 'He took out egg, He cracked egg.',
        actualTimeRange: [66, 83],
        predictedTimeRange: [67, 84],
        sample: 27.76 / 66
    },
    {
        video: './videos/s27-d50.mp4',
        text: 'The person throws away the shell.',
        actualTimeRange: [181, 192],
        predictedTimeRange: [184, 192],
        sample: 75.17 / 181
    },
    {
        video: './videos/s27-d54.mp4',
        text: 'The person removes a cutting board.',
        actualTimeRange: [18, 22],
        predictedTimeRange: [17, 22],
        sample: 34.39 / 18
    },
    {
        video: './videos/s27-d54.mp4',
        text: 'He took out knife.',
        actualTimeRange: [29, 32],
        predictedTimeRange: [29, 32],
        sample: 55.2 / 29
    },
    {
        video: './videos/s28-d39.mp4',
        text: 'The person gets a fresh leek.',
        actualTimeRange: [4, 7],
        predictedTimeRange: [4, 7],
        sample: 17.82 / 4
    },
    {
        video: './videos/s28-d39.mp4',
        text: 'He cut off leaves.',
        actualTimeRange: [9, 10],
        predictedTimeRange: [9, 10],
        sample: 40.68 / 9
    },
    {
        video: './videos/s28-d46.mp4',
        text: 'He walked to the drawer, took out the cutting board and knife.',
        actualTimeRange: [5, 6],
        predictedTimeRange: [5, 6],
        sample: 11.02 / 5
    },
    {
        video: './videos/s28-d46.mp4',
        text: 'He cut the bottom of the pineapple, walked to the cabinet and took out a plate.',
        actualTimeRange: [15, 20],
        predictedTimeRange: [15, 21],
        sample: 29.56 / 15
    },
    {
        video: './videos/s29-d31.mp4',
        text: 'He gets out a cutting board.',
        actualTimeRange: [15, 26],
        predictedTimeRange: [14, 24],
        sample: 8.47 / 15
    },
    {
        video: './videos/s29-d31.mp4',
        text: 'The man grabs some garlic.',
        actualTimeRange: [45, 63],
        predictedTimeRange: [45, 67],
        sample: 24.8 / 45
    },
];

const video = document.getElementById('myVideo');
const dataList = document.getElementById('dataList');
const videoSelect = document.getElementById('videoSelect');

// 动态生成视频选择器的选项
const videoNames = Array.from(new Set(data.map(item => item.video)));
videoNames.forEach(name => {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = name;
    videoSelect.appendChild(option);
});
const defaultData = data[0];
video.src = defaultData.video;
video.play();
const defaultListItem = document.createElement('li');
var ar0 = defaultData.actualTimeRange[0] * defaultData.sample;
var ar1 = defaultData.actualTimeRange[1] * defaultData.sample;
var pr0 = defaultData.predictedTimeRange[0] * defaultData.sample;
var pr1 = defaultData.predictedTimeRange[1] * defaultData.sample;
defaultListItem.innerHTML = `文本：${defaultData.text}<br>实际时间范围：${ar0.toFixed(2)}-${ar1.toFixed(2)}<br>预测时间范围：${pr0.toFixed(2)}-${pr1.toFixed(2)}`;
dataList.appendChild(defaultListItem);
// 根据选择的视频更新播放内容和数据列表
videoSelect.addEventListener('change', function () {
    const selectedVideo = this.value;
    const selectedData = data.filter(item => item.video === selectedVideo);
    video.src = selectedData[0].video;
    video.play();
    dataList.innerHTML = '';
    selectedData.forEach(item => {
        const listItem = document.createElement('li');
        ar0 = item.actualTimeRange[0] * item.sample;
        ar1 = item.actualTimeRange[1] * item.sample;
        pr0 = item.predictedTimeRange[0] * item.sample;
        pr1 = item.predictedTimeRange[1] * item.sample;
        listItem.innerHTML = `文本：${item.text}<br>实际时间范围：${ar0.toFixed(2)}-${ar1.toFixed(2)}<br>预测时间范围：${pr0.toFixed(2)}-${pr1.toFixed(2)}`;
        dataList.appendChild(listItem);
    });
});
const directories = [
'./ca-rock-garden/index.html',
'./cave-01/index.html',
'./tuesday-test/index.html',
];
window.location.href = directories[Math.floor(Math.random() * directories.length)];

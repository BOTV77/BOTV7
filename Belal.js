const { spawn } = require('child_process');
const axios = require('axios');
const logger = require('./utils/logger');
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
})
.on('error', err => {
    if (err.code === 'EACCES') {
        logger.error('Server error: permission denied');
    } else {
        logger.error(`Server error: ${err.message}`);
    }
});

global.startCount = 0;

function startBot(errorMessage) {
    if (errorMessage) {
        logger.error(errorMessage);
    }

    const botProcess = spawn('node', ['--trace-warnings', 'main.js'], {
        cwd: __dirname,
        stdio: 'inherit',
        shell: true
    });

    botProcess.on('close', code => {
        if (code !== 0 && global.startCount < 3) {
            global.startCount++;
            logger.warn(`Bot exited with code ${code}. Restarting (${global.startCount}/3)...`);
            startBot();
        } else {
            logger.error(`Bot stopped after ${global.startCount} restarts.`);
        }
    });

    botProcess.on('error', err => {
        logger.error(`Bot process error: ${JSON.stringify(err)}`);
    });
}

// Fetch update info with fallback
(async () => {
    try {
        const response = await axios.get('https://raw.githubusercontent.com/Shahad-ot-Belal/SH-BOT/main/package.json');
        logger.info(`Update description: ${response.data.description}`);
        logger.info(`Update version: ${response.data.version}`);
        logger.info(`Update content: ${JSON.stringify(response.data)}`);
    } catch (err) {
        logger.error(`Fetch update error: ${err.message}`);
    }

    startBot();
})();

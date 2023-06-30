if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

exports.summarycontroller = async (req, res) => {
    try {

        const { text } = req.body;
        const { data } = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Summarize this \n${text}`,
            max_tokens: 500,
            temperature: 0,
        });

        if (data) {
            if (data.choices[0].text) {
                return res.status(200).json(data.choices[0].text);
            }
        }

    } catch (err) {
        console.log(err);
        return res.status(404).json({
            message: err.message
        })

    }
}


exports.paragraphcontroller = async (req, res) => {
    try {
        const { text } = req.body;
        const { data } = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Write a Details Paragraph about \n${text}`,
            max_tokens: 500,
            temperature: 0,
        });

        if (data) {
            if (data.choices[0].text) {
                return res.status(200).json(data.choices[0].text);
            }
        }
    } catch (err) {
        console.log(err);
        return res.status(404).json({
            message: err.message
        })
    }
}



exports.chatbotcontroller = async (req, res) => {
    try {
        const { text } = req.body;
        const { data } = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `Answer my question ${text}`,
            max_tokens: 300,
            temperature: 0.7,
        });
        if (data) {
            if (data.choices[0].text) {
                return res.status(200).json(data.choices[0].text);
            }
        }
    } catch (err) {
        console.log(err);
        return res.status(404).json({
            message: err.message,
        });
    }
}


exports.pycontroller = async (req, res) => {
    try {
        const { text } = req.body;
        const { data } = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: `/* Convert these instruction into python code \n${text}`,
            max_tokens: 400,
            temperature: 0.25,
        });
        if (data) {
            if (data.choices[0].text) {
                return res.status(200).json(data.choices[0].text);
            }
        }
    } catch (err) {
        console.log(err);
        return res.status(404).json({
            message: err.message,
        });
    }
};

exports.imagecontroller = async (req, res) => {
    try {
        const { text } = req.body;
        const { data } = await openai.createImage({
            prompt: `Generate a image of ${text}`,
            n: 1,
            size: "512x512",
        });
        if (data) {
            if (data.data[0].url) {
                return res.status(200).json(data.data[0].url);
            }
        }
    } catch (err) {
        console.log(err);
        return res.status(404).json({
            message: err.message,
        });
    }
};

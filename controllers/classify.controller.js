const { classifyWithGemini } = require("../services/gemini.service");

exports.classifyText = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        success: false,
        message: "Text is required"
      });
    }

    const category = await classifyWithGemini(text);

    res.status(200).json({
      success: true,
      input: text,
      category
    });

  } catch (error) {
    console.error("Classification Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to classify text"
    });
  }
};

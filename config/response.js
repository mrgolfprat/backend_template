
exports.success = (res, result, code) => res.status(code || 200).json({ success: true, result })

exports.failed = (res, message, code) => res.status(code || 400).json({ success: false, message })
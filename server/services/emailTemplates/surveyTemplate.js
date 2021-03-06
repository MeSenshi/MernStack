const keys = require('../../config/keys');
module.exports = (survey) => {

    return `
    <html>
    <body>
    <div style="text-align: center">
    <h3>I'd like your input</h3>
    <p>Please answer the following question:</p>
    <p>${survey.body}</p>
    <dvi>
    <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
</dvi>
<dvi>
    <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
</dvi>
</div>
</body>
</html>
    `;
};
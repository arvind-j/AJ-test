// app.js
document.addEventListener("DOMContentLoaded", function () {
    PSPDFKit.load({
        container: "#pspdfkit-container",
        document: "/2. GATE Physical Sciences Paper 2015.pdf", // Replace with the path to your PDF file
        licenseKey: "a2aEEILlQe9hWrkYkFNRWdCH9zqtvACiOuGNdDDbDIkeguclLlPqbRUkIM8e5Us_cyskT6MnnmFc7zmY8W7kBGtpgqd9xL1Fyfmo7AweYc_pNvZ-1T_IGRjvA2193Bu4v5XqIncsBXJtztUrlm4gx4JC6TPT7JscuYF6zsTJOfAALJRsTZLOR0cGE4XlzXB_Kl4m_IMLQjjOpnXg_Q" // Replace with your PSPDFKit license key
    }).then(function (instance) {
        console.log("PSPDFKit loaded", instance);

        // Example: Add a text annotation to the first page
        instance.createAnnotation({
            type: "text",
            pageIndex: 0,
            rect: [100, 100, 300, 200],
            text: "This is a text annotation."
        });

        // Example: Log number of pages
        console.log("Number of pages:", instance.pageCount);
    }).catch(function (error) {
        console.error("Error loading PSPDFKit:", error);
    });
});

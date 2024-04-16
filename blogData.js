const blog=[
 {
    title:"Best photography blog",
    subtitle:"Zion Adventure Photog",
    data:"The Zion Adventure Photog blog establishes owner Arika as an expert of both photography and Zion National Park. The blog’s rugged, playful color scheme of brown and gold evokes nature and sunshine. Its homepage features visual testimonials of happy clients enjoying their adventures. Arika embeds her Instagram Feed directly onto her site, spreading the word about her service and drawing people deeper into her brand through social media marketing.",
    date:"March 24, 2024",
    name:"Tilak Datla",
    imgSrc:"https://static.wixstatic.com/media/3ed8f1_ff495bfb1ec84bb8bf2c6ae92f404243~mv2.jpg/v1/fit/w_778,h_519,q_81/3ed8f1_ff495bfb1ec84bb8bf2c6ae92f404243~mv2.webp"
},
 {
    title:"Best interior design blog",
    subtitle:" Seasons in Colour",
    data:"Jenny Kakoudakis’ interior design blog, Seasons in Colour, equips professional designers with educational content—all within a sophisticated, tasteful and user-friendly site. In fact, it earned an Amara Interior Blog Award back in 2016.The first fold of the site is a full-bleed image of the feature story. The secondary feature appears on a black background, which breaks up the design of the site while calling attention to an article that Jenny is particularly proud of.",
    date:"March 25, 2024",
    name:"Tilak Datla",
    imgSrc:"https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsX29mZmljZV8zNF9hX3Bob3RvX29mX21pbmltYWxfYXBhcnRtZW50X19sX3NvZmFfOTZhYjQ1OTQtOWVhMS00NTllLTkzZjctZDFjYzc3MTgyMjZkXzEuanBn.jpg"
 },

 {
    title:"Best entrepreneur blog",
    subtitle:"Bella & Bloom",
    data:"Bella & Bloom is the brainchild of Shellie, a web designer who specializes in empowering female entrepreneurs with beautiful websites and business resources. She cleverly uses her blog as a free resource for women looking to DIY their business growth. By providing valuable insights and tools, she demonstrates a strong commitment to her mission and a genuine care for her audience's success.The design of this website and blog speaks volumes about Shellie's expertise. Its attractive and intuitive layout reflects her exceptional web design skills. ",
    date:"March 28, 2024",
    name:"Tilak Datla",
    imgSrc:"https://static.wixstatic.com/media/0e86fc_43c67231d24743768f480c6ba4f119db~mv2.webp"
 },

{
    title:"Best trip-planning blog",
    subtitle:"Corlu Travels",
    data:"Corlu Travels offers valuable insights not only for travel bloggers but for anyone looking to build a user-friendly interface. Its owner, Corie Mazza, obviously put a lot of thought into making her site easy to navigate. For example, she used Wix's Mega Menu feature to incorporate submenus into her site header. This strategic move enhances the site's accessibility, allowing visitors to easily explore different sections.Navigation is seamlessly handled, providing visitors with two options: they can freely browse the 'All Posts' page or choose a specific category page tailored to their interests.",
    date:"April 2, 2024",
    name:"Tilak Datla",
    imgSrc:"https://static.wixstatic.com/media/7958d2_0c119dd1a15542808016fec4764e6b4b~mv2.jpg/v1/fill/w_925,h_694,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7958d2_0c119dd1a15542808016fec4764e6b4b~mv2.jpg"
}
];

// Convert the blog data to a JSON string
const blogJson = JSON.stringify(blog);

// Store the JSON string in local storage
localStorage.setItem('blog', blogJson);

// Export the blog data
export { blog };
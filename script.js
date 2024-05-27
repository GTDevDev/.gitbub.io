const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');
const button = document.querySelector('.button');

function toggleSidebar() {
  var sidebar = document.getElementById('sidebar');
  sidebar.style.width = sidebar.style.width === '100px' ? '0' : '100px';
}

function updateContent(linkText) {
  const body = document.body;

  const contentMap = {
    'Home': {
      content: '<h1>Home</h1><p>Welcome to my website! Click the navigation buttons in the sidebar to see other content.</p>',
      bgColor: 'red',
      marginTop: '50px'
    },
    'Projects': {
      content: '<h1>My Projects</h1><p>Almost every project ive ever worked on, that includes mods and maps both big or small sizes projects.</p><h1>Download Link:</h1><p></p><a href="https://www.mediafire.com/file/trlr6ma04t2bn6k/allMyProjects.zip/file">Download</a>',
      bgColor: 'green',
      marginTop: '110px'
    },
    'Youtube': {
      content: '<h1>My Socials</h1><p>My YouTube Channel.</p><p>Channel:</p><a href="https://youtube.com/@gtout_drewller?si=XnDZ-dpP1qHgxbvs">GTOut Youtube Channel</p>',
      bgColor: 'green',
      marginTop: '150px'
    },
    'About': {
      content: '<h1>About</h1><p>A small website i made for fun, it still has a use of course. This was created by: GTOut.</p>',
      bgColor: 'green',
      marginTop: '50px'
    },
    'Service': {
      content: '<h1>Services</h1><p>Welcome to my Services page! I specialize in crafting high-quality mods and maps tailored to your needs. I'm dedicated to delivering top-notch results to enhance your gaming experience. What I Offer:Custom Mods: From tweaking gameplay mechanics to creating entirely new features, I bring your ideas to life. Bespoke Maps: Whether you need a detailed world map or a unique level design, I excel in creating immersive environments. Why Choose Me: My Services Are Free! Contact at:</p> <a href="#">Socials</a>',
      bgColor: 'green',
      marginTop: '100px'
    },
    'Contact': {
      content: '<h1>Contact</h1><p><b>Any business topics please contact me at:</b></p><i>gtdevdev@gmail.com</i>',
      bgColor: 'red',
      marginTop: '50px'
    }
  };

  if (contentMap.hasOwnProperty(linkText)) {
    content.innerHTML = contentMap[linkText].content;
    body.style.backgroundColor = contentMap[linkText].bgColor;
    button.style.marginTop = contentMap[linkText].marginTop;
  } else {
    content.innerHTML = '<h1>Page Not Found</h1><p>Sorry, the page you requested does not exist.</p>';
  }
}

sidebar.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    const linkText = event.target.textContent.trim();
    updateContent(linkText);
  }
});

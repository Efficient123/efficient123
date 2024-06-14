document.addEventListener('DOMContentLoaded', function () {
    const homeLink = document.getElementById('home-link');
    const socialsLink = document.getElementById('socials-link');
    const content = document.getElementById('content');

    homeLink.addEventListener('click', function (e) {
        e.preventDefault();
        content.innerHTML = `
            <h1>Efficient123</h1>
            <p>Hello! I'm Efficient123, a multifaceted individual with a passion for technology and creativity. I specialize in creating add-ons for Minecraft Bedrock Edition, adding unique features and improvements to enhance the gameplay experience for players around the world. My journey into the world of game modifications started with a curiosity about how games work and evolved into a passion for making games more enjoyable for others.</p>
            <p>In addition to my work with Minecraft, I run a YouTube channel where I share tutorials, gameplay videos, and other fun content related to gaming and technology. It's a hobby that allows me to connect with a broader audience and share my interests with like-minded individuals.</p>
            <p>I'm also the proud owner of a vibrant Discord server, where I engage with a community of gamers, developers, and fans. The server is a space for discussion, collaboration, and sharing ideas, and it's been an amazing journey to see it grow and thrive.</p>
            <p>On the professional front, I'm a front-end developer with a keen eye for design and user experience. I enjoy creating intuitive, responsive, and visually appealing websites and applications. My skills in HTML, CSS, and JavaScript allow me to bring concepts to life on the web.</p>
            <p>Outside of the digital world, I have a passion for calisthenics. I enjoy challenging myself with bodyweight exercises and finding new ways to improve my strength and flexibility. It's a great way to stay fit and clear my mind after a long day of coding.</p>
            <p>Thank you for visiting my website! Feel free to explore and connect with me on social media.</p>
        `;
    });

    socialsLink.addEventListener('click', function (e) {
        e.preventDefault();
        content.innerHTML = `
            <h1>Socials</h1>
            <p>Join my Discord server: <a href="https://discord.com/invite/Sg9UTchZ34" target="_blank">Discord Invite</a></p>
            <p>Check out my YouTube channel: <a href="https://youtube.com/@efficient123" target="_blank">YouTube Channel</a></p>
        `;
    });
});

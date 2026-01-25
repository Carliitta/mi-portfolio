const handleEmailClick = (e) => {
  e.preventDefault();

  const mailtoLink = "mailto:carla.rodriguez340@gmail.com";
  const gmailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=carla.rodriguez340@gmail.com";

  const start = Date.now();
  window.location.href = mailtoLink;

  setTimeout(() => {
    if (Date.now() - start < 1500) {
      window.open(gmailLink, "_blank");
    }
  }, 700);
};

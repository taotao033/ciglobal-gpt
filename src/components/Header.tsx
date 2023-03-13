export default () => {
  const storageTheme = localStorage.getItem("theme");
  console.log(storageTheme);
  let srcUrl = "/logo.png";
  if (!storageTheme) {
    srcUrl = "/logo-dark.png";
  } else {
    srcUrl = "/logo.png";
  }
  return (
    <div class="fb">
      <div class="fc">
        <img src={srcUrl} class="mr-4" />

        <div class="fi mt-2">
          <span class="gpt-title">CiglobalGPT</span>
        </div>
      </div>
    </div>
  );
};

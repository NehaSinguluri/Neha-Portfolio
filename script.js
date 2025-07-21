document.getElementById('darkToggle').addEventListener('click', function() {
  const root = document.documentElement;
  const current = root.getAttribute('data-theme');
  root.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
});

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const viewBtn = document.getElementById("viewArticleBtn");
    const articleSelect = document.getElementById("articleSelect");

    viewBtn.addEventListener("click", function () {
      const selectedPDF = articleSelect.value;
      if (selectedPDF) {
        window.open(selectedPDF, '_blank');
      }
    });
  });
</script>


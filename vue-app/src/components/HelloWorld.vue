<template>
  <div class="container">
    <h2>👋 Hello, Dev Community! 🚀 [vue+docker example]</h2>
    <p>Join us and be part of an amazing group of developers! 💡🔥</p>
    <p>💻 <strong>Le bon développeur 🇹🇳 المبرمج المناسب</strong> 💻</p>
    <p>🔗 <a href="https://www.facebook.com/groups/lebondeveloppeur" target="_blank">Click here to join now!</a></p>

    <!-- Advertisement Banner -->
    <div class="ad-banner">
      <a href="https://certificate.lebondeveloppeur.com/devops-lebondeveloppeur/devops-44h.png" target="_blank">
        <img src="https://certificate.lebondeveloppeur.com/devops-lebondeveloppeur/devops-44h.png"
          alt="DevOps Training Banner">
      </a>
    </div>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<style scoped>
.container {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: inline-block;
  text-align: center;
}

h2 {
  color: #007BFF;
}

p {
  font-size: 18px;
  color: #333;
}

a {
  text-decoration: none;
  color: #ff5733;
  font-weight: bold;
}

a:hover {
  color: #d43f00;
}

.ad-banner {
  margin-top: 20px;
}

.ad-banner img {
  width: 100%;
  border-radius: 10px;
}
</style>

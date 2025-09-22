<template>
  <div id="app">
    <!-- 导航栏 -->
    <header class="header">
      <nav class="navbar">
        <div class="container">
          <div class="nav-content">
            <div class="nav-brand">
              <router-link to="/" class="brand-link">
                <div class="brand-logo">和信科技</div>
              </router-link>
            </div>
            
            <div class="nav-menu" :class="{ active: mobileMenuOpen }">
              <router-link to="/" class="nav-link" @click="closeMobileMenu">首页</router-link>
              <router-link to="/about" class="nav-link" @click="closeMobileMenu">关于我们</router-link>
              <router-link to="/services" class="nav-link" @click="closeMobileMenu">产品服务</router-link>
              <router-link to="/contact" class="nav-link" @click="closeMobileMenu">联系我们</router-link>
            </div>
            
            <div class="nav-actions">
              <a href="tel:400-888-1688" class="btn btn-primary">400-888-1688</a>
            </div>
            
            <div class="mobile-menu-toggle" @click="toggleMobileMenu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <!-- 主要内容 -->
    <main class="main">
      <router-view />
    </main>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3 class="footer-title">和信科技</h3>
            <p class="footer-desc">专业的移动设备租赁服务平台，让每个人都能以最经济的方式体验最新科技产品。</p>
            <div class="social-links">
              <a href="#" class="social-link">微信</a>
              <a href="#" class="social-link">微博</a>
              <a href="#" class="social-link">抖音</a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-subtitle">产品服务</h4>
            <ul class="footer-links">
              <li><a href="/services">手机租赁</a></li>
              <li><a href="/services">数码设备租赁</a></li>
              <li><a href="/services">企业租赁方案</a></li>
              <li><a href="/services">设备回收</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-subtitle">公司信息</h4>
            <ul class="footer-links">
              <li><a href="/about">关于我们</a></li>
              <li><a href="/about">发展历程</a></li>
              <li><a href="/about">企业文化</a></li>
              <li><a href="/contact">加入我们</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-subtitle">联系我们</h4>
            <div class="contact-info">
              <p>📞 客服热线：400-888-1688</p>
              <p>📧 邮箱：info@hexinkj.com</p>
              <p>📍 地址：湖北省武汉市江岸区新华路396号</p>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-copyright">
            <p>&copy; 2025 武汉和信科技有限公司 版权所有</p>
            <p>
              <a href="#" class="footer-link">鄂ICP备2025140712号-3</a> | 
              <a href="#" class="footer-link">隐私政策</a> | 
              <a href="#" class="footer-link">服务条款</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      mobileMenuOpen: false
    }
  },
  methods: {
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
    }
  }
}
</script>

<style scoped>
/* 导航栏样式 */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.navbar {
  padding: 1rem 0;
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand-link {
  text-decoration: none;
}

.brand-logo {
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  list-style: none;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #667eea;
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background: #333;
  transition: 0.3s;
}

.main {
  margin-top: 80px;
  min-height: calc(100vh - 80px);
}

/* 页脚样式 */
.footer {
  background: #1a1a1a;
  color: white;
  padding: 3rem 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-subtitle {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #fff;
}

.footer-desc {
  color: #ccc;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #667eea;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  padding: 0.5rem 1rem;
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #667eea;
  color: white;
}

.contact-info p {
  color: #ccc;
  margin-bottom: 0.5rem;
}

.footer-bottom {
  border-top: 1px solid #333;
  padding-top: 1.5rem;
  text-align: center;
}

.footer-copyright p {
  color: #999;
  margin-bottom: 0.5rem;
}

.footer-link {
  color: #999;
  text-decoration: none;
  margin: 0 0.5rem;
}

.footer-link:hover {
  color: #667eea;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .nav-menu {
    position: fixed;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .nav-menu.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .mobile-menu-toggle {
    display: flex;
  }

  .nav-actions {
    display: none;
  }

  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>

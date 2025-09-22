<template>
  <div class="home">
    <!-- 英雄区域 -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title fade-in-up">
              专业的移动设备<br>
              <span class="gradient-text">租赁服务平台</span>
            </h1>
            <p class="hero-subtitle fade-in-up">
              让每个人都能以最经济的方式体验最新科技产品<br>
              手机、平板、笔记本等数码设备一站式租赁服务
            </p>
            <div class="hero-actions fade-in-up">
              <a href="tel:400-888-1688" class="btn btn-primary">立即咨询</a>
              <router-link to="/services" class="btn btn-outline">了解服务</router-link>
            </div>
          </div>
          <div class="hero-image">
            <div class="hero-visual">
              <div class="device-showcase">
                <div class="device phone">📱</div>
                <div class="device tablet">📱</div>
                <div class="device laptop">💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心业务 -->
    <section class="section services-overview">
      <div class="container">
        <h2 class="section-title">核心业务</h2>
        <p class="section-subtitle">专注移动设备租赁领域，为个人和企业提供全方位的数码设备租赁服务</p>
        
        <div class="grid grid-3">
          <div class="card service-card">
            <div class="icon">📱</div>
            <h3>手机租赁平台</h3>
            <p>提供iPhone、华为、小米、OPPO、vivo等主流品牌手机租赁服务，支持短期、中期、长期租赁方案</p>
            <ul class="service-features">
              <li>✓ 全新正品手机</li>
              <li>✓ 灵活租期选择</li>
              <li>✓ 专业售后服务</li>
            </ul>
          </div>
          
          <div class="card service-card">
            <div class="icon">💻</div>
            <h3>数码设备租赁</h3>
            <p>平板电脑、笔记本电脑、智能手表、耳机等配件租赁，满足不同场景使用需求</p>
            <ul class="service-features">
              <li>✓ 设备种类丰富</li>
              <li>✓ 快速配送服务</li>
              <li>✓ 专业技术支持</li>
            </ul>
          </div>
          
          <div class="card service-card">
            <div class="icon">🏢</div>
            <h3>企业租赁方案</h3>
            <p>为企业提供批量设备租赁服务，包括员工手机管理、会议设备租赁等企业级解决方案</p>
            <ul class="service-features">
              <li>✓ 批量优惠价格</li>
              <li>✓ 统一管理平台</li>
              <li>✓ 定制化服务</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务优势 -->
    <section class="section advantages gradient-bg">
      <div class="container">
        <h2 class="section-title" style="color: white;">为什么选择和信科技</h2>
        <p class="section-subtitle" style="color: rgba(255,255,255,0.8);">专业团队，贴心服务，让您的租赁体验更加安心便捷</p>
        
        <div class="grid grid-4">
          <div class="advantage-item">
            <div class="advantage-icon">🔒</div>
            <h4>安全可靠</h4>
            <p>SSL加密传输，用户信息脱敏处理，支付安全认证，全方位保障用户数据安全</p>
          </div>
          
          <div class="advantage-item">
            <div class="advantage-icon">⚡</div>
            <h4>快速响应</h4>
            <p>7×24小时客服服务，1分钟内在线响应，24小时内问题处理完毕</p>
          </div>
          
          <div class="advantage-item">
            <div class="advantage-icon">💰</div>
            <h4>价格透明</h4>
            <p>无隐形收费，租金透明公开，支持多种支付方式，让您租得放心</p>
          </div>
          
          <div class="advantage-item">
            <div class="advantage-icon">🚚</div>
            <h4>快速配送</h4>
            <p>与顺丰、京东物流合作，同城当日达，异地次日达，免费配送上门</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 数据统计 -->
    <section class="section stats">
      <div class="container">
        <div class="grid grid-4">
          <div class="stat-item">
            <div class="stat-number">10,000+</div>
            <div class="stat-label">注册用户</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">100+</div>
            <div class="stat-label">合作商家</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">1,000万+</div>
            <div class="stat-label">月交易额</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">95%+</div>
            <div class="stat-label">客户满意度</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 合作伙伴 -->
    <section class="section partners">
      <div class="container">
        <h2 class="section-title">合作伙伴</h2>
        <p class="section-subtitle">与知名品牌深度合作，为用户提供优质的产品和服务</p>
        
        <div class="partners-grid">
          <div class="partner-item">
            <div class="partner-logo">华为</div>
          </div>
          <div class="partner-item">
            <div class="partner-logo">小米</div>
          </div>
          <div class="partner-item">
            <div class="partner-logo">OPPO</div>
          </div>
          <div class="partner-item">
            <div class="partner-logo">vivo</div>
          </div>
          <div class="partner-item">
            <div class="partner-logo">Apple</div>
          </div>
          <div class="partner-item">
            <div class="partner-logo">腾讯云</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA区域 -->
    <section class="section cta">
      <div class="container">
        <div class="cta-content">
          <h2>开始您的租赁体验</h2>
          <p>专业客服团队为您提供一对一服务，立即联系我们获取专属租赁方案</p>
          <div class="cta-actions">
            <a href="tel:400-888-1688" class="btn btn-primary btn-large">400-888-1688</a>
            <router-link to="/contact" class="btn btn-outline btn-large">在线咨询</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    // 添加滚动动画效果
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up')
        }
      })
    }, observerOptions)

    // 观察所有需要动画的元素
    document.querySelectorAll('.card, .advantage-item, .stat-item, .partner-item').forEach(el => {
      observer.observe(el)
    })
  }
}
</script>

<style scoped>
/* 英雄区域 */
.hero {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  padding: 120px 0 80px;
  overflow: hidden;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.hero-visual {
  position: relative;
  height: 400px;
}

.device-showcase {
  position: relative;
  height: 100%;
}

.device {
  position: absolute;
  font-size: 4rem;
  animation: float 3s ease-in-out infinite;
}

.device.phone {
  top: 20%;
  left: 20%;
  animation-delay: 0s;
}

.device.tablet {
  top: 50%;
  right: 30%;
  animation-delay: 1s;
}

.device.laptop {
  bottom: 20%;
  left: 40%;
  animation-delay: 2s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

/* 服务卡片 */
.service-card {
  text-align: center;
  height: 100%;
}

.service-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1a1a1a;
}

.service-card p {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.service-features {
  list-style: none;
  text-align: left;
}

.service-features li {
  padding: 0.5rem 0;
  color: #555;
  border-bottom: 1px solid #f0f0f0;
}

.service-features li:last-child {
  border-bottom: none;
}

/* 优势区域 */
.advantages {
  color: white;
}

.advantage-item {
  text-align: center;
  padding: 2rem 1rem;
}

.advantage-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.advantage-item h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.advantage-item p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

/* 数据统计 */
.stats {
  background: #f8f9fa;
}

.stat-item {
  text-align: center;
  padding: 2rem 1rem;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.1rem;
  color: #666;
  font-weight: 500;
}

/* 合作伙伴 */
.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.partner-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.partner-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.partner-logo {
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
}

/* CTA区域 */
.cta {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.cta-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-large {
  padding: 15px 40px;
  font-size: 1.1rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero {
    padding: 100px 0 60px;
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .device-showcase {
    height: 200px;
  }
  
  .device {
    font-size: 2.5rem;
  }
  
  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-large {
    width: 100%;
    max-width: 300px;
  }
}
</style>

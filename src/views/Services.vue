<template>
  <div class="services">
    <!-- 页面头部 -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">产品服务</h1>
        <p class="page-subtitle">专业的移动设备租赁服务，满足个人和企业的多样化需求</p>
      </div>
    </section>

    <!-- 服务概览 -->
    <section class="section services-overview">
      <div class="container">
        <h2 class="section-title">我们的服务</h2>
        <p class="section-subtitle">三大核心业务板块，为您提供全方位的数码设备租赁解决方案</p>
        
        <div class="grid grid-3">
          <div class="service-card featured">
            <div class="service-header">
              <div class="service-icon">📱</div>
              <h3>手机租赁平台</h3>
              <div class="service-badge">热门服务</div>
            </div>
            <div class="service-content">
              <p class="service-desc">提供专业的手机租赁服务平台，连接手机供应商与租赁用户</p>
              <ul class="service-features">
                <li>✓ 支持iPhone、华为、小米、OPPO、vivo等主流品牌</li>
                <li>✓ 提供交易撮合、资金托管、争议调解等服务</li>
                <li>✓ 全新正品保障，专业售后服务</li>
                <li>✓ 灵活租期选择，按需租赁</li>
              </ul>
              <div class="service-pricing">
                <span class="price-from">租金从</span>
                <span class="price-amount">¥99/月</span>
                <span class="price-desc">起</span>
              </div>
            </div>
          </div>
          
          <div class="service-card">
            <div class="service-header">
              <div class="service-icon">💻</div>
              <h3>数码设备租赁</h3>
            </div>
            <div class="service-content">
              <p class="service-desc">平板电脑、笔记本电脑、智能手表、耳机等配件租赁服务</p>
              <ul class="service-features">
                <li>✓ 平板电脑、笔记本电脑租赁</li>
                <li>✓ 智能手表、耳机等配件租赁</li>
                <li>✓ 摄影设备、游戏设备租赁</li>
                <li>✓ 短期、中期、长期租赁方案</li>
              </ul>
              <div class="service-pricing">
                <span class="price-from">租金从</span>
                <span class="price-amount">¥199/月</span>
                <span class="price-desc">起</span>
              </div>
            </div>
          </div>
          
          <div class="service-card">
            <div class="service-header">
              <div class="service-icon">🏢</div>
              <h3>企业租赁方案</h3>
            </div>
            <div class="service-content">
              <p class="service-desc">为企业提供批量设备租赁服务和企业级解决方案</p>
              <ul class="service-features">
                <li>✓ 员工手机租赁管理系统</li>
                <li>✓ 设备生命周期管理服务</li>
                <li>✓ 企业级售后支持和维护</li>
                <li>✓ 批量优惠价格和定制化服务</li>
              </ul>
              <div class="service-pricing">
                <span class="price-from">批量优惠</span>
                <span class="price-amount">定制报价</span>
                <span class="price-desc"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务对象 -->
    <section class="section target-audience gradient-bg">
      <div class="container">
        <h2 class="section-title" style="color: white;">服务对象</h2>
        <p class="section-subtitle" style="color: rgba(255,255,255,0.8);">为不同群体提供专业的租赁解决方案</p>
        
        <div class="grid grid-4">
          <div class="audience-card">
            <div class="audience-icon">👤</div>
            <h4>个人消费者</h4>
            <p>为个人用户提供最新款手机租赁服务，满足体验新机、临时使用等需求</p>
          </div>
          
          <div class="audience-card">
            <div class="audience-icon">🏢</div>
            <h4>企业客户</h4>
            <p>为中小企业提供员工手机租赁、会议设备租赁等企业级服务</p>
          </div>
          
          <div class="audience-card">
            <div class="audience-icon">🎓</div>
            <h4>学生群体</h4>
            <p>针对大学生群体提供经济实惠的手机租赁方案</p>
          </div>
          
          <div class="audience-card">
            <div class="audience-icon">💼</div>
            <h4>商务人士</h4>
            <p>为商务人士提供高端手机租赁和快速换机服务</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 租赁流程 -->
    <section class="section rental-process">
      <div class="container">
        <h2 class="section-title">租赁流程</h2>
        <p class="section-subtitle">简单四步，轻松完成设备租赁</p>
        
        <div class="process-container">
          <div class="process-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>选择设备</h4>
              <p>浏览我们的设备库，选择您需要的手机或数码设备</p>
            </div>
          </div>
          
          <div class="process-arrow">→</div>
          
          <div class="process-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>提交订单</h4>
              <p>填写租赁信息，选择租期，提交租赁申请</p>
            </div>
          </div>
          
          <div class="process-arrow">→</div>
          
          <div class="process-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>审核确认</h4>
              <p>我们会快速审核您的申请，确认后安排发货</p>
            </div>
          </div>
          
          <div class="process-arrow">→</div>
          
          <div class="process-step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>收货使用</h4>
              <p>收到设备后即可开始使用，享受优质的租赁体验</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 热门设备 -->
    <section class="section popular-devices">
      <div class="container">
        <h2 class="section-title">热门设备</h2>
        <p class="section-subtitle">精选最受欢迎的数码设备，满足您的不同需求</p>
        
        <div class="device-categories">
          <div class="category-tabs">
            <button 
              v-for="category in categories" 
              :key="category.id"
              :class="['tab-btn', { active: activeCategory === category.id }]"
              @click="activeCategory = category.id"
            >
              {{ category.name }}
            </button>
          </div>
          
          <div class="device-grid">
            <div 
              v-for="device in currentDevices" 
              :key="device.id"
              class="device-card"
            >
              <div class="device-image">{{ device.emoji }}</div>
              <div class="device-info">
                <h4 class="device-name">{{ device.name }}</h4>
                <p class="device-specs">{{ device.specs }}</p>
                <div class="device-price">
                  <span class="price">¥{{ device.price }}/月</span>
                  <span class="original-price" v-if="device.originalPrice">¥{{ device.originalPrice }}</span>
                </div>
                <button class="btn btn-primary btn-small">立即租赁</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务保障 -->
    <section class="section service-guarantee">
      <div class="container">
        <h2 class="section-title">服务保障</h2>
        <p class="section-subtitle">全方位的服务保障，让您租得安心，用得放心</p>
        
        <div class="grid grid-3">
          <div class="guarantee-card">
            <div class="guarantee-icon">🛡️</div>
            <h4>品质保障</h4>
            <ul>
              <li>全新正品设备，品质有保障</li>
              <li>专业检测，确保设备正常运行</li>
              <li>定期维护保养，延长设备寿命</li>
            </ul>
          </div>
          
          <div class="guarantee-card">
            <div class="guarantee-icon">🔧</div>
            <h4>售后服务</h4>
            <ul>
              <li>7×24小时客服支持</li>
              <li>设备故障免费维修更换</li>
              <li>专业技术团队远程协助</li>
            </ul>
          </div>
          
          <div class="guarantee-card">
            <div class="guarantee-icon">📦</div>
            <h4>物流配送</h4>
            <ul>
              <li>与顺丰、京东物流合作</li>
              <li>同城当日达，异地次日达</li>
              <li>免费配送上门，包装回收</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA区域 -->
    <section class="section cta gradient-bg">
      <div class="container">
        <div class="cta-content">
          <h2>立即开始您的租赁之旅</h2>
          <p>专业的设备，优质的服务，合理的价格，让您体验不一样的数码生活</p>
          <div class="cta-actions">
            <a href="tel:400-888-1688" class="btn btn-primary btn-large">咨询热线：400-888-1688</a>
            <router-link to="/contact" class="btn btn-outline btn-large">在线咨询</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      activeCategory: 'phones',
      categories: [
        { id: 'phones', name: '手机' },
        { id: 'tablets', name: '平板' },
        { id: 'laptops', name: '笔记本' },
        { id: 'accessories', name: '配件' }
      ],
      devices: {
        phones: [
          { id: 1, name: 'iPhone 15 Pro', specs: '256GB 钛原色', price: 299, originalPrice: 399, emoji: '📱' },
          { id: 2, name: '华为 Mate 60 Pro', specs: '512GB 雅川青', price: 259, originalPrice: 329, emoji: '📱' },
          { id: 3, name: '小米 14 Ultra', specs: '512GB 钛金属', price: 239, originalPrice: 299, emoji: '📱' },
          { id: 4, name: 'OPPO Find X7', specs: '256GB 大漠银月', price: 199, originalPrice: 259, emoji: '📱' },
          { id: 5, name: 'vivo X100 Pro', specs: '512GB 星迹蓝', price: 219, originalPrice: 279, emoji: '📱' },
          { id: 6, name: '三星 Galaxy S24', specs: '256GB 钛灰色', price: 229, originalPrice: 289, emoji: '📱' }
        ],
        tablets: [
          { id: 7, name: 'iPad Pro 12.9', specs: '256GB WiFi版', price: 199, originalPrice: 259, emoji: '📱' },
          { id: 8, name: '华为 MatePad Pro', specs: '256GB 5G版', price: 159, originalPrice: 199, emoji: '📱' },
          { id: 9, name: '小米 Pad 6 Max', specs: '256GB WiFi版', price: 129, originalPrice: 169, emoji: '📱' },
          { id: 10, name: 'Surface Pro 9', specs: '256GB i5版', price: 249, originalPrice: 319, emoji: '📱' }
        ],
        laptops: [
          { id: 11, name: 'MacBook Pro 14', specs: 'M3 Pro 512GB', price: 399, originalPrice: 499, emoji: '💻' },
          { id: 12, name: '华为 MateBook X', specs: 'i7 512GB', price: 299, originalPrice: 379, emoji: '💻' },
          { id: 13, name: 'ThinkPad X1 Carbon', specs: 'i7 1TB', price: 349, originalPrice: 429, emoji: '💻' },
          { id: 14, name: 'Dell XPS 13', specs: 'i7 512GB', price: 279, originalPrice: 349, emoji: '💻' }
        ],
        accessories: [
          { id: 15, name: 'Apple Watch Ultra', specs: '49mm 钛金属', price: 99, originalPrice: 129, emoji: '⌚' },
          { id: 16, name: 'AirPods Pro 2', specs: '主动降噪', price: 39, originalPrice: 49, emoji: '🎧' },
          { id: 17, name: '华为 FreeBuds Pro', specs: '主动降噪', price: 29, originalPrice: 39, emoji: '🎧' },
          { id: 18, name: 'Sony WH-1000XM5', specs: '头戴式降噪', price: 59, originalPrice: 79, emoji: '🎧' }
        ]
      }
    }
  },
  computed: {
    currentDevices() {
      return this.devices[this.activeCategory] || []
    }
  },
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
    document.querySelectorAll('.service-card, .audience-card, .process-step, .device-card, .guarantee-card').forEach(el => {
      observer.observe(el)
    })
  }
}
</script>

<style scoped>
/* 页面头部 */
.page-header {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  padding: 120px 0 80px;
  text-align: center;
}

.page-title {
  font-size: 3rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.2rem;
  color: #666;
}

/* 服务卡片 */
.service-card {
  background: white;
  border-radius: 20px;
  padding: 0;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease;
  position: relative;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

.service-card.featured {
  border: 3px solid #667eea;
  transform: scale(1.05);
}

.service-card.featured:hover {
  transform: scale(1.05) translateY(-10px);
}

.service-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  text-align: center;
  position: relative;
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.service-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0;
}

.service-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.service-content {
  padding: 2rem;
}

.service-desc {
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.service-features {
  list-style: none;
  margin-bottom: 2rem;
}

.service-features li {
  padding: 0.5rem 0;
  color: #555;
  border-bottom: 1px solid #f0f0f0;
}

.service-features li:last-child {
  border-bottom: none;
}

.service-pricing {
  text-align: center;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 12px;
  margin-top: 1rem;
}

.price-from {
  color: #666;
  font-size: 0.9rem;
  margin-right: 0.5rem;
}

.price-amount {
  font-size: 2rem;
  font-weight: 700;
  color: #667eea;
  margin: 0 0.5rem;
}

.price-desc {
  color: #666;
  font-size: 0.9rem;
}

/* 服务对象 */
.audience-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  color: white;
  transition: all 0.3s ease;
}

.audience-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.audience-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.audience-card h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: white;
}

.audience-card p {
  line-height: 1.6;
  opacity: 0.9;
}

/* 租赁流程 */
.process-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 3rem;
}

.process-step {
  text-align: center;
  max-width: 200px;
}

.step-number {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 auto 1rem;
}

.step-content h4 {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
}

.step-content p {
  color: #666;
  line-height: 1.5;
  font-size: 0.9rem;
}

.process-arrow {
  font-size: 2rem;
  color: #667eea;
  font-weight: bold;
}

/* 设备分类 */
.device-categories {
  margin-top: 3rem;
}

.category-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.tab-btn {
  padding: 1rem 2rem;
  background: white;
  border: 2px solid #e9ecef;
  border-radius: 30px;
  color: #666;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-btn:hover,
.tab-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-color: #667eea;
  color: white;
}

.device-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.device-card {
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  text-align: center;
}

.device-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.device-image {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.device-name {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.device-specs {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.device-price {
  margin-bottom: 1.5rem;
}

.price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
  margin-right: 0.5rem;
}

.original-price {
  color: #999;
  text-decoration: line-through;
  font-size: 1rem;
}

.btn-small {
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
}

/* 服务保障 */
.guarantee-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  text-align: center;
}

.guarantee-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.guarantee-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.guarantee-card h4 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.guarantee-card ul {
  list-style: none;
  text-align: left;
}

.guarantee-card li {
  padding: 0.5rem 0;
  color: #666;
  position: relative;
  padding-left: 1.5rem;
}

.guarantee-card li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

/* CTA区域 */
.cta {
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
  .page-header {
    padding: 100px 0 60px;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .service-card.featured {
    transform: none;
  }
  
  .service-card.featured:hover {
    transform: translateY(-10px);
  }
  
  .process-container {
    flex-direction: column;
    gap: 2rem;
  }
  
  .process-arrow {
    transform: rotate(90deg);
    margin: 1rem 0;
  }
  
  .category-tabs {
    flex-direction: column;
    align-items: center;
  }
  
  .tab-btn {
    width: 200px;
  }
  
  .device-grid {
    grid-template-columns: 1fr;
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

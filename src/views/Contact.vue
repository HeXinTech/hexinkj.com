<template>
  <div class="contact">
    <!-- 页面头部 -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">联系我们</h1>
        <p class="page-subtitle">专业的客服团队，7×24小时为您提供优质服务</p>
      </div>
    </section>

    <!-- 联系方式概览 -->
    <section class="section contact-overview">
      <div class="container">
        <div class="grid grid-3">
          <div class="contact-card">
            <div class="contact-icon">📞</div>
            <h3>客服热线</h3>
            <div class="contact-info">
              <p class="main-number">400-888-xxxx</p>
              <p class="sub-info">7×24小时服务</p>
            </div>
            <a href="tel:400-888-xxxx" class="btn btn-primary">立即拨打</a>
          </div>

          <div class="contact-card">
            <div class="contact-icon">💬</div>
            <h3>在线客服</h3>
            <div class="contact-info">
              <p class="main-number">即时响应</p>
              <p class="sub-info">1分钟内回复</p>
            </div>
            <button class="btn btn-primary" @click="openOnlineChat">在线咨询</button>
          </div>

          <div class="contact-card">
            <div class="contact-icon">📧</div>
            <h3>邮箱联系</h3>
            <div class="contact-info">
              <p class="main-number">info@hexinkj.com</p>
              <p class="sub-info">24小时内回复</p>
            </div>
            <a href="mailto:info@hexinkj.com" class="btn btn-primary">发送邮件</a>
          </div>
        </div>
      </div>
    </section>

    <!-- 详细联系信息 -->
    <section class="section contact-details">
      <div class="container">
        <div class="details-grid">
          <div class="contact-info-section">
            <h2 class="section-title">联系信息</h2>

            <div class="info-group">
              <h4>📞 客服热线</h4>
              <div class="info-list">
                <div class="info-item">
                  <span class="label">全国客服热线：</span>
                  <span class="value">400-888-xxxx</span>
                </div>
                <div class="info-item">
                  <span class="label">VIP客户专线：</span>
                  <span class="value">400-888-1699</span>
                </div>
                <div class="info-item">
                  <span class="label">技术支持热线：</span>
                  <span class="value">17663746514</span>
                </div>
                <div class="info-item">
                  <span class="label">投诉建议热线：</span>
                  <span class="value">400-888-1677</span>
                </div>
              </div>
            </div>

            <div class="info-group">
              <h4>💬 在线客服</h4>
              <div class="info-list">
                <div class="info-item">
                  <span class="label">官网在线客服：</span>
                  <span class="value">7×24小时</span>
                </div>
                <div class="info-item">
                  <span class="label">微信客服：</span>
                  <span class="value">hexin-kefu</span>
                </div>
                <div class="info-item">
                  <span class="label">QQ客服群：</span>
                  <span class="value">123456789</span>
                </div>
                <div class="info-item">
                  <span class="label">企业微信：</span>
                  <span class="value">和信科技客服</span>
                </div>
              </div>
            </div>

            <div class="info-group">
              <h4>📧 邮箱联系</h4>
              <div class="info-list">
                <div class="info-item">
                  <span class="label">客服邮箱：</span>
                  <span class="value">service@hexinkj.com</span>
                </div>
                <div class="info-item">
                  <span class="label">商务合作：</span>
                  <span class="value">business@hexinkj.com</span>
                </div>
                <div class="info-item">
                  <span class="label">企业邮箱：</span>
                  <span class="value">info@hexinkj.com</span>
                </div>
              </div>
            </div>
          </div>

          <div class="contact-form-section">
            <h2 class="section-title">在线留言</h2>
            <form class="contact-form" @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">姓名 *</label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  placeholder="请输入您的姓名"
                >
              </div>

              <div class="form-group">
                <label for="phone">联系电话 *</label>
                <input
                  type="tel"
                  id="phone"
                  v-model="form.phone"
                  required
                  placeholder="请输入您的联系电话"
                >
              </div>

              <div class="form-group">
                <label for="email">邮箱</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  placeholder="请输入您的邮箱地址"
                >
              </div>

              <div class="form-group">
                <label for="service">服务类型</label>
                <select id="service" v-model="form.service">
                  <option value="">请选择服务类型</option>
                  <option value="phone-rental">手机租赁</option>
                  <option value="device-rental">数码设备租赁</option>
                  <option value="enterprise">企业租赁方案</option>
                  <option value="support">技术支持</option>
                  <option value="complaint">投诉建议</option>
                  <option value="cooperation">商务合作</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">留言内容 *</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  placeholder="请详细描述您的需求或问题，我们会尽快回复您"
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-large" :disabled="submitting">
                {{ submitting ? '提交中...' : '提交留言' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务时间和标准 -->
    <section class="section service-standards gradient-bg">
      <div class="container">
        <h2 class="section-title" style="color: white;">服务时间与标准</h2>
        <p class="section-subtitle" style="color: rgba(255,255,255,0.8);">专业的服务团队，严格的服务标准，确保优质的客户体验</p>

        <div class="grid grid-2">
          <div class="standard-card">
            <h4>🕒 服务时间</h4>
            <ul class="time-list">
              <li><strong>人工客服：</strong>周一至周日 9:00-21:00</li>
              <li><strong>在线客服：</strong>7×24小时</li>
              <li><strong>电话客服：</strong>工作日 9:00-18:00</li>
              <li><strong>紧急处理：</strong>7×24小时（重大问题）</li>
            </ul>
          </div>

          <div class="standard-card">
            <h4>⭐ 服务标准</h4>
            <ul class="standard-list">
              <li><strong>接听时间：</strong>3声内接听</li>
              <li><strong>响应时间：</strong>在线咨询1分钟内响应</li>
              <li><strong>处理时效：</strong>一般问题24小时内处理完毕</li>
              <li><strong>满意度：</strong>客户满意度≥95%</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 客服团队 -->
    <section class="section customer-service-team">
      <div class="container">
        <h2 class="section-title">客服团队</h2>
        <p class="section-subtitle">20人专业客服团队，为您提供全方位的服务支持</p>

        <div class="team-overview">
          <div class="team-stats">
            <div class="stat-card">
              <div class="stat-number">20</div>
              <div class="stat-label">客服人员总数</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">2</div>
              <div class="stat-label">客服主管</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">12</div>
              <div class="stat-label">一线客服</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">4</div>
              <div class="stat-label">技术支持</div>
            </div>
            <div class="stat-card">
              <div class="stat-number">2</div>
              <div class="stat-label">投诉处理专员</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 公司地址 -->
    <section class="section company-address">
      <div class="container">
        <h2 class="section-title">公司地址</h2>
        <div class="address-content">
          <div class="address-info">
            <div class="address-card">
              <h4>🏢 总部地址</h4>
              <p class="address-text">湖北省武汉市江岸区新华路396号</p>
              <p class="address-detail">邮政编码：430014</p>
              <p class="address-detail">联系电话：17663746514</p>
              <p class="address-detail">传真号码：027-82345678</p>
            </div>

            <div class="business-hours">
              <h4>🕐 营业时间</h4>
              <p>周一至周五：9:00 - 18:00</p>
              <p>周六至周日：10:00 - 17:00</p>
              <p class="note">法定节假日营业时间可能有所调整</p>
            </div>
          </div>

          <div class="map-placeholder">
            <div class="map-container">
              <div class="map-icon">🗺️</div>
              <p>地图位置</p>
              <p class="map-desc">湖北省武汉市江岸区新华路396号</p>
              <button class="btn btn-outline">查看地图</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 其他联系方式 -->
    <section class="section social-contacts">
      <div class="container">
        <h2 class="section-title">关注我们</h2>
        <p class="section-subtitle">通过社交媒体与我们保持联系，获取最新动态和优惠信息</p>

        <div class="social-grid">
          <div class="social-card">
            <div class="social-icon">📱</div>
            <h4>官方微博</h4>
            <p>@和信租赁平台</p>
            <p class="social-desc">最新产品资讯和行业动态</p>
          </div>

          <div class="social-card">
            <div class="social-icon">📹</div>
            <h4>抖音官方账号</h4>
            <p>和信租手机</p>
            <p class="social-desc">精彩视频内容和产品展示</p>
          </div>

          <div class="social-card">
            <div class="social-icon">💬</div>
            <h4>微信公众号</h4>
            <p>和信科技租赁</p>
            <p class="social-desc">专业资讯和客户服务</p>
          </div>

          <div class="social-card">
            <div class="social-icon">👥</div>
            <h4>用户交流群</h4>
            <p>QQ群：123456789</p>
            <p class="social-desc">用户交流和问题解答</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      submitting: false,
      form: {
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      }
    }
  },
  methods: {
    openOnlineChat() {
      // 这里可以集成在线客服系统
      alert('在线客服功能即将开放，请先拨打客服热线：400-888-xxxx')
    },

    async submitForm() {
      if (!this.validateForm()) {
        return
      }

      this.submitting = true

      try {
        // 模拟提交表单
        await new Promise(resolve => setTimeout(resolve, 2000))

        alert('留言提交成功！我们会在24小时内与您联系。')
        this.resetForm()
      } catch (error) {
        alert('提交失败，请稍后重试或直接拨打客服热线：400-888-xxxx')
      } finally {
        this.submitting = false
      }
    },

    validateForm() {
      if (!this.form.name.trim()) {
        alert('请输入您的姓名')
        return false
      }

      if (!this.form.phone.trim()) {
        alert('请输入您的联系电话')
        return false
      }

      if (!this.form.message.trim()) {
        alert('请输入留言内容')
        return false
      }

      // 简单的手机号验证
      const phoneRegex = /^1[3-9]\d{9}$/
      if (!phoneRegex.test(this.form.phone.replace(/\D/g, ''))) {
        alert('请输入正确的手机号码')
        return false
      }

      return true
    },

    resetForm() {
      this.form = {
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      }
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
    document.querySelectorAll('.contact-card, .standard-card, .stat-card, .social-card').forEach(el => {
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

/* 联系卡片 */
.contact-card {
  background: white;
  border-radius: 20px;
  padding: 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
}

.contact-icon {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.contact-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.contact-info {
  margin-bottom: 2rem;
}

.main-number {
  font-size: 1.8rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.sub-info {
  color: #666;
  font-size: 0.9rem;
}

/* 详细信息 */
.details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.info-group {
  margin-bottom: 2.5rem;
}

.info-group h4 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.info-list {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #e9ecef;
}

.info-item:last-child {
  border-bottom: none;
}

.label {
  color: #666;
  font-weight: 500;
}

.value {
  color: #1a1a1a;
  font-weight: 600;
}

/* 联系表单 */
.contact-form {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

/* 服务标准 */
.standard-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: 2rem;
  color: white;
}

.standard-card h4 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: white;
}

.time-list,
.standard-list {
  list-style: none;
}

.time-list li,
.standard-list li {
  padding: 0.5rem 0;
  color: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.time-list li:last-child,
.standard-list li:last-child {
  border-bottom: none;
}

/* 团队统计 */
.team-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.stat-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #666;
  font-weight: 500;
}

/* 地址信息 */
.address-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.address-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
}

.address-card h4 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.address-text {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: 500;
}

.address-detail {
  color: #666;
  margin-bottom: 0.5rem;
}

.business-hours {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.business-hours h4 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.business-hours p {
  color: #666;
  margin-bottom: 0.5rem;
}

.note {
  font-size: 0.9rem;
  color: #999;
  font-style: italic;
  margin-top: 1rem;
}

/* 地图占位符 */
.map-container {
  background: #f8f9fa;
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  border: 2px dashed #ddd;
}

.map-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.6;
}

.map-container p {
  color: #666;
  margin-bottom: 0.5rem;
}

.map-desc {
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

/* 社交媒体 */
.social-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.social-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.social-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.social-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.social-card h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.social-card p {
  color: #667eea;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.social-desc {
  color: #666 !important;
  font-weight: normal !important;
  font-size: 0.9rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-header {
    padding: 100px 0 60px;
  }

  .page-title {
    font-size: 2.5rem;
  }

  .details-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .address-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .team-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .social-grid {
    grid-template-columns: 1fr;
  }

  .contact-card {
    padding: 2rem 1.5rem;
  }

  .main-number {
    font-size: 1.5rem;
  }

  .btn-large {
    width: 100%;
  }
}
</style>

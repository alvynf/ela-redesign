:root {
  --primary: #2563eb;
  --primary-hover: #1d4ed8;
  --primary-light: #eff6ff;
  --accent: #f59e0b;
  --bg-color: #f8fafc;
  --card-bg: #ffffff;
  --text-main: #0f172a;
  --text-muted: #64748b;
  --success: #10b981;
  --danger: #ef4444;
  --border: #e2e8f0;
  --radius-lg: 16px;
  --radius-md: 12px;
  --radius-sm: 8px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 25px -5px rgba(37, 99, 235, 0.1);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

body {
  background-color: var(--bg-color);
  color: var(--text-main);
  min-height: 100vh;
}

.hidden { display: none !important; }

/* ==================== LOGIN PAGE STYLES ==================== */
.auth-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(135deg, #eff6ff 0%, #f8fafc 100%);
}

.auth-card {
  background: var(--card-bg);
  width: 100%;
  max-width: 400px;
  padding: 32px 24px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-lg);
}

.auth-header {
  text-align: center;
  margin-bottom: 28px;
}

.brand-logo {
  width: 56px;
  height: 56px;
  background: var(--primary);
  color: white;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin: 0 auto 16px;
  box-shadow: 0 8px 16px rgba(37, 99, 235, 0.25);
}

.auth-header h2 {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-main);
}

.auth-header p {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: 6px;
}

.form-group {
  margin-bottom: 18px;
}

.form-group label {
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 6px;
}

.input-with-icon {
  position: relative;
  display: flex;
  align-items: center;
}

.input-with-icon i {
  position: absolute;
  left: 14px;
  color: var(--text-muted);
  font-size: 0.95rem;
}

.input-with-icon input {
  width: 100%;
  padding: 12px 14px 12px 40px;
  border: 1.5px solid var(--border);
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  outline: none;
  transition: all 0.2s;
}

.input-with-icon input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}

.btn-primary-block {
  width: 100%;
  background-color: var(--primary);
  color: white;
  border: none;
  padding: 13px;
  border-radius: var(--radius-md);
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: 0.2s;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
}

.btn-primary-block:hover {
  background-color: var(--primary-hover);
}

.auth-divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 20px 0;
  color: var(--text-muted);
  font-size: 0.75rem;
}

.auth-divider::before, .auth-divider::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid var(--border);
}

.auth-divider span { padding: 0 10px; }

.btn-sso {
  width: 100%;
  background: white;
  border: 1.5px solid var(--border);
  padding: 10px;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 0.85rem;
  color: var(--text-main);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: 0.2s;
}

.btn-sso img { width: 18px; height: 18px; }
.btn-sso:hover { background: #f8fafc; border-color: #cbd5e1; }

.auth-footer {
  text-align: center;
  margin-top: 20px;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.auth-footer a { color: var(--primary); text-decoration: none; font-weight: 700; }

/* ==================== DASHBOARD APP STYLES ==================== */
.app-wrapper {
  padding-bottom: 85px;
}

.top-bar {
  background-color: var(--card-bg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 100;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-icon {
  width: 34px;
  height: 34px;
  background: var(--primary);
  color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
}

.brand-text {
  font-weight: 800;
  color: var(--text-main);
  font-size: 1.1rem;
}

.brand-text span { color: var(--primary); }

.user-profile {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-info {
  text-align: right;
  display: flex;
  flex-direction: column;
}

.user-name { font-size: 0.85rem; font-weight: 700; color: var(--text-main); }
.user-role { font-size: 0.7rem; color: var(--text-muted); }

.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--primary-light);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  border: 1px solid #bfdbfe;
}

.btn-logout {
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 1.1rem;
  cursor: pointer;
  padding: 4px;
  margin-left: 4px;
  transition: 0.2s;
}

.btn-logout:hover { color: var(--danger); }

/* Main Container */
.container {
  max-width: 480px;
  margin: 0 auto;
  padding: 16px;
}

.hero-banner {
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
  color: white;
  padding: 20px;
  border-radius: var(--radius-lg);
  margin-bottom: 20px;
  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.2);
}

.hero-text h2 { font-size: 1.25rem; font-weight: 800; }
.hero-text p { font-size: 0.8rem; opacity: 0.9; margin-top: 6px; line-height: 1.4; }

/* Cards Common */
.card {
  background-color: var(--card-bg);
  border-radius: var(--radius-lg);
  padding: 18px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  margin-bottom: 16px;
}

/* Attendance Card */
.attendance-card {
  border-left: 5px solid var(--primary);
  box-shadow: var(--shadow-md);
}

.badge-live {
  background-color: #fef2f2;
  color: var(--danger);
  font-size: 0.68rem;
  font-weight: 800;
  padding: 4px 10px;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  letter-spacing: 0.3px;
}

.badge-live i { font-size: 0.45rem; animation: pulse 1.5s infinite; }

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.3; }
  100% { opacity: 1; }
}

.course-info h3 { font-size: 1.1rem; font-weight: 700; margin: 10px 0 4px; }
.course-info p { font-size: 0.8rem; color: var(--text-muted); margin-bottom: 14px; }

.input-group { display: flex; gap: 8px; }

.input-group input {
  flex: 1;
  padding: 11px 14px;
  border: 1.5px solid var(--border);
  border-radius: var(--radius-md);
  outline: none;
  font-size: 0.88rem;
  font-weight: 600;
}

.input-group input:focus { border-color: var(--primary); }

.input-group button {
  background-color: var(--primary);
  color: white;
  border: none;
  padding: 11px 18px;
  border-radius: var(--radius-md);
  font-weight: 700;
  font-size: 0.88rem;
  cursor: pointer;
  transition: 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
}

.input-group button:hover { background-color: var(--primary-hover); }

.hint-text {
  font-size: 0.72rem;
  color: var(--text-muted);
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.success-box {
  background-color: #ecfdf5;
  border: 1px solid #a7f3d0;
  padding: 14px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  gap: 12px;
}

.check-icon { font-size: 1.6rem; color: var(--success); }
.success-box strong { font-size: 0.9rem; color: #065f46; }
.success-box p { font-size: 0.78rem; color: #047857; margin-top: 2px; }
.status-present { color: var(--success); font-weight: 800; }

/* Section Headers */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 12px;
}

.section-header h4 {
  font-size: 0.95rem;
  font-weight: 800;
  color: var(--text-main);
  display: flex;
  align-items: center;
  gap: 8px;
}

.section-header h4 i { color: var(--accent); }
.see-all { font-size: 0.78rem; color: var(--primary); font-weight: 700; text-decoration: none; }

/* Task Card */
.task-card {
  display: flex;
  align-items: center;
  gap: 14px;
}

.task-icon {
  width: 44px;
  height: 44px;
  background-color: #fff7ed;
  color: #ea580c;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.task-details { flex: 1; }
.task-details h5 { font-size: 0.9rem; font-weight: 700; }
.task-details p { font-size: 0.75rem; color: var(--text-muted); margin-top: 2px; }
.deadline.urgent {
  font-size: 0.72rem;
  color: var(--danger);
  font-weight: 700;
  display: inline-block;
  margin-top: 4px;
}

.btn-action-sm {
  background-color: var(--primary-light);
  color: var(--primary);
  border: 1px solid #bfdbfe;
  padding: 8px 14px;
  border-radius: var(--radius-sm);
  font-weight: 700;
  font-size: 0.78rem;
  cursor: pointer;
}

/* Course Cards */
.course-grid { display: flex; flex-direction: column; gap: 12px; }

.course-item { padding: 0; overflow: hidden; display: flex; flex-direction: column; }
.course-header-tag { height: 6px; width: 100%; }

.tag-blue { background-color: #3b82f6; }
.tag-purple { background-color: #a855f7; }
.tag-green { background-color: #10b981; }

.course-body { padding: 14px 18px; }
.course-body .code { font-size: 0.65rem; font-weight: 800; color: var(--text-muted); letter-spacing: 0.5px; }
.course-body h5 { font-size: 0.95rem; font-weight: 700; margin: 4px 0 2px; }
.course-body .lecturer { font-size: 0.75rem; color: var(--text-muted); }

.progress-info {
  display: flex;
  justify-content: space-between;
  font-size: 0.72rem;
  color: var(--text-muted);
  margin-top: 12px;
}

.progress-bar {
  height: 6px;
  background-color: #f1f5f9;
  border-radius: 3px;
  margin-top: 6px;
  overflow: hidden;
}

.progress { height: 100%; background-color: var(--primary); border-radius: 3px; }

/* Bottom Nav */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--card-bg);
  display: flex;
  justify-content: space-around;
  padding: 12px 0;
  border-top: 1px solid var(--border);
  box-shadow: 0 -4px 12px rgba(0,0,0,0.03);
}

.nav-item {
  text-decoration: none;
  color: var(--text-muted);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.7rem;
  gap: 4px;
}

.nav-item i { font-size: 1.25rem; }
.nav-item.active { color: var(--primary); font-weight: 700; }

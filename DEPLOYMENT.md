# EEPL Website - Deployment Guide

## 🚀 Pre-Deployment Checklist

Before deploying to production, ensure you complete all items in this checklist:

### ✅ Critical Items

- [ ] **Build Production CSS**
  ```bash
  npm run build:prod
  ```
  Verify `public/output.css` is generated and minified

- [ ] **Remove Console Logs** ✅ (Already completed)
  - All debug statements removed from production code

- [ ] **Test All Pages**
  - [ ] index.html loads correctly
  - [ ] about_us.html displays without errors
  - [ ] services.html shows all service cards
  - [ ] projects.html displays project modals
  - [ ] clients.html shows client logos
  - [ ] contact_us.html form submits successfully
  - [ ] carrers.html loads job listings
  - [ ] endurance.html displays project details

- [ ] **Verify All Images Load**
  - Check browser console for 404 errors
  - Test on slow connection

- [ ] **Test Contact Form**
  - Submit a test message
  - Verify Formspree receives it
  - Check success/error messages display

### ⚠️ Important Items

- [ ] **Update Contact Information**
  - Verify email addresses are correct
  - Check phone numbers
  - Confirm physical address

- [ ] **SEO Optimization**
  - [ ] Meta descriptions on all pages
  - [ ] Proper page titles
  - [ ] Alt text on all images
  - [ ] Sitemap.xml uploaded
  - [ ] Robots.txt configured

- [ ] **Performance Testing**
  - Run Google PageSpeed Insights
  - Test on mobile devices
  - Check load times

- [ ] **Cross-Browser Testing**
  - [ ] Google Chrome
  - [ ] Mozilla Firefox
  - [ ] Safari (Mac/iOS)
  - [ ] Microsoft Edge
  - [ ] Mobile browsers

---

## 📋 Deployment Options

### Option 1: Netlify (Recommended)

**Best for:** Automatic deployments, form handling, HTTPS

#### Steps:

1. **Prepare the Site**
   ```bash
   npm run build:prod
   ```

2. **Push to Git** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Ready for deployment"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. **Connect to Netlify**
   - Go to [https://app.netlify.com/](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Choose your Git provider (GitHub)
   - Select your repository

4. **Configure Build Settings**
   - Build command: `npm run build:prod`
   - Publish directory: `.` (root directory)
   - Click "Deploy site"

5. **Custom Domain** (Optional)
   - Go to Site settings → Domain management
   - Add custom domain: `www.ecologicengineering.co.in`
   - Follow DNS configuration instructions

6. **Environment Variables** (if needed)
   - Site settings → Environment variables
   - Add any required variables

#### Netlify Advantages:
- ✅ Free HTTPS certificate
- ✅ Automatic deployments on git push
- ✅ Form handling without server
- ✅ CDN included
- ✅ Preview deployments for testing

---

### Option 2: Vercel

**Best for:** Performance, global CDN

#### Steps:

1. **Install Vercel CLI** (optional)
   ```bash
   npm install -g vercel
   ```

2. **Deploy from Dashboard**
   - Go to [https://vercel.com/](https://vercel.com/)
   - Click "Add New Project"
   - Import Git repository
   - Configure:
     - Build Command: `npm run build:prod`
     - Output Directory: `.`
   - Deploy

3. **Or Deploy from CLI**
   ```bash
   npm run build:prod
   vercel
   ```

4. **Custom Domain**
   - Project settings → Domains
   - Add `www.ecologicengineering.co.in`
   - Configure DNS records

---

### Option 3: GitHub Pages

**Best for:** Simple static hosting, free

#### Steps:

1. **Build Site**
   ```bash
   npm run build:prod
   ```

2. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Repository settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `(root)`
   - Save

4. **Access Site**
   - Available at: `https://username.github.io/repository-name/`

**Note:** GitHub Pages doesn't support server-side form processing. Formspree will still work for contact forms.

---

### Option 4: Traditional Hosting (cPanel/FTP)

**Best for:** Existing hosting plans

#### Steps:

1. **Build Production Files**
   ```bash
   npm run build:prod
   ```

2. **Prepare Files**
   - Compress all files into a ZIP
   - OR use FTP client (FileZilla)

3. **Upload via FTP**
   ```
   Host: ftp.yourdomain.com
   Username: your_username
   Password: your_password
   ```

   Upload these files/folders:
   - All `.html` files
   - `public/` folder
   - `script.js`
   - `style.css`
   - `sitemap.xml`
   - `robots.txt`

4. **Configure Domain**
   - Point domain to hosting directory
   - Ensure `index.html` is set as default document

5. **Enable HTTPS**
   - Use Let's Encrypt (usually free in cPanel)
   - OR purchase SSL certificate

---

## 🔧 Post-Deployment Tasks

### Immediate (Within 24 hours)

1. **Test Live Site**
   - Visit all pages
   - Test contact form
   - Check mobile responsiveness
   - Verify HTTPS is working

2. **Set Up Analytics**
   - Add Google Analytics code
   - Set up Google Search Console
   - Submit sitemap.xml

3. **Monitor Performance**
   - Run Lighthouse audit
   - Check Core Web Vitals
   - Test page load speed

### Week 1

1. **SEO Setup**
   - Submit site to Google
   - Submit site to Bing
   - Set up Google My Business

2. **Testing**
   - Monitor form submissions
   - Check for broken links
   - Review user feedback

3. **Backup**
   - Create backup of site files
   - Document deployment process

### Ongoing

1.  **Content Updates**
   - Add new projects
   - Update client testimonials
   - Post news/updates

2. **Performance Monitoring**
   - Monthly speed tests
   - Regular broken link checks
   - Security updates

3. **Maintenance**
   - Update dependencies (`npm update`)
   - Review and respond to form submissions
   - Monitor analytics

---

## 🔍 Troubleshooting

### CSS Not Loading

**Problem:** Styles not applying after deployment

**Solution:**
1. Verify `public/output.css` exists
2. Check file path in HTML files
3. Clear CDN/browser cache
4. Rebuild CSS: `npm run build:prod`

### Contact Form Not Working

**Problem:** Form submissions fail

**Solution:**
1. Check Formspree endpoint URL
2. Verify HTTPS is enabled
3. Check browser console for errors
4. Test with different email addresses

### Images Not Displaying

**Problem:** Images show broken icons

**Solution:**
1. Verify images exist in `public/assets/`
2. Check file paths (case-sensitive)
3. Compress large images (< 1MB each)
4. Use correct file extensions

### Slow Page Load

**Problem:** Site loads slowly

**Solution:**
1. Compress images (use TinyPNG/Squoosh)
2. Enable server compression (Gzip/Brotli)
3. Use CDN for static assets
4. Minimize CSS/JS files

---

## 📊 Performance Optimization

### Before Launch

1. **Image Optimization**
   ```bash
   # Recommended tools:
   # - TinyPNG (online)
   # - Squoosh (Google tool)
   # - ImageOptim (Mac)
   ```

2. **CSS Minification**
   ```bash
   npm run build:prod  # Already minifies CSS
   ```

3. **HTML Cleanup**
   - Remove comments
   - Minimize whitespace (optional)

### After Launch

1. **Enable Caching**
   Add to `.htaccess` (Apache):
   ```apache
   # Cache static assets for 1 year
   <FilesMatch "\.(jpg|jpeg|png|gif|ico|css|js|svg|webp)$">
     Header set Cache-Control "max-age=31536000, public"
   </FilesMatch>
   ```

2. **Enable Compression**
   ```apache
   # Enable Gzip compression
   <IfModule mod_deflate.c>
     AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
   </IfModule>
   ```

3. **Monitor with Tools**
   - Google PageSpeed Insights
   - GTmetrix
   - Pingdom
   - WebPageTest

---

## 🔒 Security Best Practices

1. **HTTPS Only**
   - Always use HTTPS in production
   - Redirect HTTP to HTTPS

2. **Form Protection**
   - Formspree includes spam protection
   - Consider adding honeypot field

3. **Content Security**
   - Keep dependencies updated
   - Regular security audits
   - Monitor for vulnerabilities

4. **Backup Strategy**
   - Weekly automated backups
   - Store backups off-site
   - Test restore procedures

---

## 📞 Support

If you encounter issues during deployment:

1. Check this guide thoroughly
2. Review error messages in browser console
3. Test in incognito/private mode
4. Contact hosting provider support

**Technical Contact:**
- Email: projects@ecologicengineering.co.in
- Phone: +91-9845669830

---

## ✅ Final Checklist Before Going Live

- [ ] All pages tested and working
- [ ] Contact form tested successfully
- [ ] Images optimized and loading
- [ ] CSS built for production (`npm run build:prod`)
- [ ] No console errors in browser
- [ ] Mobile responsive on actual devices
- [ ] Cross-browser tested
- [ ] HTTPS enabled
- [ ] Custom domain configured
- [ ] Analytics installed
- [ ] Sitemap submitted to search engines
- [ ] Backup created
- [ ] Deployment documented
- [ ] Stakeholders notified

---

**When all items are checked, you're ready to launch! 🎉**

*Last updated: January 23, 2026*

/* -------------------------------------------------------------
 * CV Pilot Landing Page Interactivity
 * Rich Micro-interactions, Dynamic Template Swapper, AI Actions,
 * Pricing Switches, FAQ Accordions & Form Handlers
 * ------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements - Hero & Workspace Builder
    const cvCard = document.getElementById('main-cv-card');
    const templateItems = document.querySelectorAll('.template-grid-item');
    const toolbarButtons = document.querySelectorAll('.toolbar-btn');
    const atsScoreNum = document.getElementById('ats-score-number');
    const atsGaugeCircle = document.getElementById('ats-gauge-circle');
    const atsMatchBadge = document.getElementById('ats-match-badge');
    const heroCtaBuild = document.getElementById('hero-cta-build');
    const heroCtaExample = document.getElementById('hero-cta-example');
    
    // DOM Elements - Interactive pricing switch
    const billingSwitch = document.getElementById('pricing-billing-switch');
    const toggleMonthlyLabel = document.getElementById('toggle-monthly');
    const toggleYearlyLabel = document.getElementById('toggle-yearly');
    const pricePro = document.getElementById('price-pro');
    const priceExec = document.getElementById('price-exec');
    const periodPro = document.getElementById('period-pro');
    const periodExec = document.getElementById('period-exec');
    
    // DOM Elements - Accordions & Forms
    const faqTriggers = document.querySelectorAll('.faq-trigger');
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterEmail = document.getElementById('newsletter-email');
    
    // Original CV details
    const cvOriginalContent = {
        name: "JAMES ANDERSON",
        title: "MARKETING MANAGER",
        summary: "Results-driven marketing manager with 5+ years of experience in digital marketing, brand strategy, and campaign management. Proven track record of increasing brand awareness and driving growth through data-driven strategies.",
        skills: ["Digital Marketing", "SEO", "Google Analytics", "Social Media", "Content Strategy", "Email Marketing", "Project Management", "Data Analysis"],
        atsScores: {
            "1": 95,
            "2": 92,
            "3": 89,
            "4": 97,
            "5": 94,
            "6": 91,
            "7": 100,
            "8": 99
        }
    };

    // AI generated profile summaries
    const aiOptimizedContent = {
        summary: "✦ AI OPTIMIZED: Highly accomplished Marketing Manager with 5+ years driving high-impact campaigns, leading agile teams of 6, and administering $500K+ budgets. Expert in leveraging SEO, content strategy, and Google Analytics to scale organic website traffic by 45% and accelerate high-quality lead generation by 35%.",
        skills: ["Digital Marketing", "SEO Optimization", "Google Analytics", "Social Media ROI", "Content Strategy", "Email Marketing Campaigns", "Project Management", "Data Analysis & ROI"]
    };

    let currentTemplate = "1";
    let isAiOptimized = false;
    let isYearlyBilling = false;

    // Initialize Animations & States
    animateAtsScore(cvOriginalContent.atsScores["1"]);
    animateBrushUnderline();

    // 1. DYNAMIC TEMPLATE SWAPPER
    templateItems.forEach(item => {
        item.addEventListener('click', () => {
            const templateId = item.getAttribute('data-template');
            if (templateId === currentTemplate) return;

            // Update Active UI State in Grid
            templateItems.forEach(t => t.classList.remove('active'));
            item.classList.add('active');

            // Apply transition animation
            cvCard.style.opacity = '0';
            cvCard.style.transform = 'translateY(10px) scale(0.98)';

            setTimeout(() => {
                // Change Template Layout Class
                cvCard.className = `cv-card template-${templateId}`;
                currentTemplate = templateId;
                
                // Rearrange DOM Elements for custom structural styling
                rearrangeCVStructure(templateId);

                // Update and animate ATS score based on template
                const targetScore = isAiOptimized ? 98 : cvOriginalContent.atsScores[templateId];
                animateAtsScore(targetScore);

                // Restore styles
                cvCard.style.opacity = '1';
                cvCard.style.transform = 'translateY(0) scale(1)';
            }, 300);
        });
    });

    // Rearrange CV structure dynamically based on template chosen
    function rearrangeCVStructure(templateId) {
        const header = cvCard.querySelector('.cv-header');
        const headerDetails = cvCard.querySelector('.cv-header-details');
        const photoContainer = cvCard.querySelector('.cv-photo-container');
        const cvBody = cvCard.querySelector('.cv-body');
        const mainCol = cvCard.querySelector('.cv-main-col');
        const sideCol = cvCard.querySelector('.cv-side-col');
        const nameText = document.getElementById('cv-name-text');
        const titleText = document.getElementById('cv-title-text');
        const contactList = cvCard.querySelector('.cv-contact-list');
        const skillsSection = cvCard.querySelector('.cv-skills-grid').parentElement;
        const contactSection = contactList.parentElement;

        // Reset elements first
        cvBody.appendChild(mainCol);
        cvBody.appendChild(sideCol);
        sideCol.appendChild(contactSection);
        contactSection.appendChild(contactList);
        sideCol.appendChild(skillsSection);
        
        // Hide standard structural headers
        if (header) header.style.display = '';
        if (photoContainer) photoContainer.style.display = '';

        if (templateId === "1") {
            // Template 1: Classic Header + Left Main + Right Sidebar
            if (headerDetails && nameText && titleText) {
                headerDetails.appendChild(nameText);
                headerDetails.appendChild(titleText);
            }
            if (header && photoContainer) {
                header.appendChild(photoContainer);
            }
        } 
        else if (templateId === "2") {
            // Template 2: Creative Sidebar (all bio in sidebar, main column on right)
            if (header) header.style.display = 'none';
            
            // Prepend bio to side column
            const bioWrapper = document.createElement('div');
            bioWrapper.className = 'cv-side-bio-block';
            bioWrapper.style.display = 'flex';
            bioWrapper.style.flexDirection = 'column';
            bioWrapper.style.alignItems = 'center';
            bioWrapper.style.marginBottom = '16px';
            bioWrapper.style.width = '100%';

            if (photoContainer) bioWrapper.appendChild(photoContainer);
            if (nameText) bioWrapper.appendChild(nameText);
            if (titleText) bioWrapper.appendChild(titleText);

            sideCol.insertBefore(bioWrapper, sideCol.firstChild);
        }
        else if (templateId === "3") {
            // Template 3: Minimalist Executive (Centered details, centered head, no photo)
            if (header) header.style.display = 'none';
            if (photoContainer) photoContainer.style.display = 'none';

            // Create centered header at top of main column
            const centerHeader = document.createElement('div');
            centerHeader.className = 'cv-center-header';
            centerHeader.style.width = '100%';
            centerHeader.style.display = 'flex';
            centerHeader.style.flexDirection = 'column';
            centerHeader.style.alignItems = 'center';
            centerHeader.style.marginBottom = '12px';

            if (nameText) centerHeader.appendChild(nameText);
            if (titleText) centerHeader.appendChild(titleText);
            if (contactList) centerHeader.appendChild(contactList);

            mainCol.insertBefore(centerHeader, mainCol.firstChild);
        }
        else if (templateId === "4") {
            // Template 4: Vibrant Brand Line (Left column border, photo in side col)
            if (header) header.style.display = 'none';

            const brandHeader = document.createElement('div');
            brandHeader.className = 'cv-brand-header-block';
            brandHeader.style.marginBottom = '12px';

            if (nameText) brandHeader.appendChild(nameText);
            if (titleText) brandHeader.appendChild(titleText);

            mainCol.insertBefore(brandHeader, mainCol.firstChild);

            if (photoContainer) {
                sideCol.insertBefore(photoContainer, sideCol.firstChild);
            }
        }
        else if (templateId === "5") {
            // Template 5: Emerald Sleek
            if (headerDetails && nameText && titleText) {
                headerDetails.appendChild(nameText);
                headerDetails.appendChild(titleText);
            }
            if (header && photoContainer) {
                header.appendChild(photoContainer);
            }
        }
        else if (templateId === "6") {
            // Template 6: Amethyst Split
            if (header) header.style.display = 'none';

            const amethystBio = document.createElement('div');
            amethystBio.className = 'cv-side-bio-block';
            amethystBio.style.display = 'flex';
            amethystBio.style.flexDirection = 'column';
            amethystBio.style.alignItems = 'center';
            amethystBio.style.marginBottom = '14px';
            amethystBio.style.width = '100%';

            if (photoContainer) amethystBio.appendChild(photoContainer);
            if (nameText) amethystBio.appendChild(nameText);
            if (titleText) amethystBio.appendChild(titleText);

            sideCol.insertBefore(amethystBio, sideCol.firstChild);
        }
        else if (templateId === "7") {
            // Template 7: Elite Single Column
            if (header) {
                if (nameText) header.appendChild(nameText);
                if (titleText) header.appendChild(titleText);
            }
            if (photoContainer) photoContainer.style.display = 'none';
        }
        else if (templateId === "8") {
            // Template 8: Minimal Accent Column
            if (headerDetails && nameText && titleText) {
                headerDetails.appendChild(nameText);
                headerDetails.appendChild(titleText);
            }
            if (header && photoContainer) {
                header.appendChild(photoContainer);
            }
        }

        // Clean up empty containers if present
        const sideBioBlocks = cvCard.querySelectorAll('.cv-side-bio-block');
        sideBioBlocks.forEach(block => {
            if (templateId !== "2" && templateId !== "6") {
                block.remove();
            }
        });
        const centerHdrs = cvCard.querySelectorAll('.cv-center-header');
        centerHdrs.forEach(block => {
            if (templateId !== "3") {
                block.remove();
            }
        });
        const brandHeaders = cvCard.querySelectorAll('.cv-brand-header-block');
        brandHeaders.forEach(block => {
            if (templateId !== "4") {
                block.remove();
            }
        });
    }

    // 2. ATS SCORE GAUGE ANIMATION
    function animateAtsScore(score) {
        let startScore = 0;
        const duration = 1200; // ms
        const startTime = performance.now();
        const circumference = 283; // 2 * pi * r (r=45)

        // Set green/orange threshold
        if (score >= 90) {
            atsGaugeCircle.setAttribute('stroke', 'var(--emerald-green)');
            atsMatchBadge.style.color = 'var(--emerald-green)';
            atsMatchBadge.style.backgroundColor = 'rgba(16, 185, 129, 0.12)';
            atsMatchBadge.style.borderColor = 'rgba(16, 185, 129, 0.2)';
            atsMatchBadge.textContent = 'Excellent Match!';
        } else {
            atsGaugeCircle.setAttribute('stroke', '#f59e0b'); // Orange
            atsMatchBadge.style.color = '#f59e0b';
            atsMatchBadge.style.backgroundColor = 'rgba(245, 158, 11, 0.1)';
            atsMatchBadge.style.borderColor = 'rgba(245, 158, 11, 0.2)';
            atsMatchBadge.textContent = 'Good Match!';
        }

        function updateGauge(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Ease out quad
            const easeProgress = progress * (2 - progress);
            const currentScore = Math.floor(easeProgress * score);
            
            atsScoreNum.textContent = currentScore;

            // Animate SVG stroke
            const offset = circumference - (easeProgress * score / 100) * circumference;
            atsGaugeCircle.style.strokeDashoffset = offset;

            if (progress < 1) {
                requestAnimationFrame(updateGauge);
            } else {
                atsScoreNum.textContent = score;
            }
        }

        requestAnimationFrame(updateGauge);
    }

    // 3. ANIME UNDERLINE DRAWING
    function animateBrushUnderline() {
        const brushPath = document.querySelector('.brush-underline path');
        if (brushPath) {
            brushPath.style.strokeDashoffset = '200';
            setTimeout(() => {
                brushPath.style.strokeDashoffset = '0';
            }, 600);
        }
    }

    // 4. FLOATING TOOLBAR INTERACTIVE PLAYGROUND
    toolbarButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.getAttribute('data-action');
            
            // Toggle active visual state
            toolbarButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (action === 'template') {
                // Focus Template Picker with bounce
                const picker = document.getElementById('floating-template-picker');
                picker.style.transform = 'scale(1.08) translateY(-4px)';
                picker.style.borderColor = 'var(--primary-blue)';
                picker.style.boxShadow = '0 20px 40px -5px rgba(37, 99, 235, 0.25)';
                
                setTimeout(() => {
                    picker.style.transform = '';
                    picker.style.borderColor = '';
                    picker.style.boxShadow = '';
                }, 1000);
            } 
            else if (action === 'content') {
                // Flash/Highlight all editable sections
                const sections = cvCard.querySelectorAll('.cv-section');
                sections.forEach(sec => {
                    sec.style.outline = '2px solid rgba(59, 130, 246, 0.4)';
                    sec.style.outlineOffset = '4px';
                    sec.style.borderRadius = '4px';
                    sec.style.backgroundColor = 'rgba(59, 130, 246, 0.03)';
                });

                showToast("✨ Editor fields ready! Double click fields in builder to customize.");

                setTimeout(() => {
                    sections.forEach(sec => {
                        sec.style.outline = '';
                        sec.style.outlineOffset = '';
                        sec.style.borderRadius = '';
                        sec.style.backgroundColor = '';
                    });
                }, 2000);
            } 
            else if (action === 'ai') {
                // AI Write trigger simulation
                if (isAiOptimized) {
                    showToast("🤖 CV is already AI Optimized! Resetting content...");
                    resetCvContent();
                    return;
                }

                cvCard.classList.add('ai-writing');
                showToast("✦ AI Copilot analyzing job post details and rewriting profile...");

                // Simulate typewriter effect rewriting summary
                setTimeout(() => {
                    cvCard.classList.remove('ai-writing');
                    simulateTypewriterSummary();
                }, 1500);
            } 
            else if (action === 'optimize') {
                // ATS Optimization Simulation
                cvCard.classList.add('optimizing');
                showToast("🚀 Standardizing format & adding high-impact keywords for ATS scanners...");

                setTimeout(() => {
                    cvCard.classList.remove('optimizing');
                    isAiOptimized = true;
                    
                    // Boost Score
                    animateAtsScore(98);
                    
                    // Highlight match tag with flash
                    atsMatchBadge.textContent = "Perfect Match! (98%)";
                    atsMatchBadge.style.transform = 'scale(1.1)';
                    atsMatchBadge.style.backgroundColor = 'rgba(16, 185, 129, 0.2)';
                    
                    setTimeout(() => {
                        atsMatchBadge.style.transform = '';
                    }, 500);

                    showToast("🎉 Optimization complete! ATS score boosted to 98%. Ready to apply!");
                }, 1600);
            }
        });
    });

    // Reset CV back to original content
    function resetCvContent() {
        isAiOptimized = false;
        const summaryP = cvCard.querySelector('.cv-section-p');
        summaryP.textContent = cvOriginalContent.summary;

        // Reset skill badges
        const badgesContainer = document.getElementById('cv-skills-badges');
        badgesContainer.innerHTML = '';
        cvOriginalContent.skills.forEach(skill => {
            const span = document.createElement('span');
            span.className = 'skill-tag';
            span.textContent = skill;
            badgesContainer.appendChild(span);
        });

        animateAtsScore(cvOriginalContent.atsScores[currentTemplate]);
    }

    // Typewriter effect simulation for the AI optimization
    function simulateTypewriterSummary() {
        const summaryP = cvCard.querySelector('.cv-section-p');
        summaryP.innerHTML = '';
        summaryP.style.borderRight = '2px solid var(--purple-sparkle)';
        summaryP.style.animation = 'typewriter-cursor 0.7s infinite alternate';

        const text = aiOptimizedContent.summary;
        let charIndex = 0;

        function typeChar() {
            if (charIndex < text.length) {
                summaryP.textContent += text.charAt(charIndex);
                charIndex++;
                
                // Fast scroll to bottom if overflowing
                const mainCol = cvCard.querySelector('.cv-main-col');
                mainCol.scrollTop = mainCol.scrollHeight;

                setTimeout(typeChar, 8); // Speedy typing
            } else {
                summaryP.style.borderRight = 'none';
                summaryP.style.animation = '';
                
                // Dynamic Skill Badge Update
                updateSkillsWithAnimation();
                
                isAiOptimized = true;
                animateAtsScore(98);
                showToast("🤖 AI write successful! ATS matching keywords injected.");
            }
        }

        typeChar();
    }

    function updateSkillsWithAnimation() {
        const badgesContainer = document.getElementById('cv-skills-badges');
        badgesContainer.style.opacity = '0';
        badgesContainer.style.transform = 'translateY(5px)';

        setTimeout(() => {
            badgesContainer.innerHTML = '';
            aiOptimizedContent.skills.forEach(skill => {
                const span = document.createElement('span');
                span.className = 'skill-tag';
                span.textContent = skill;
                badgesContainer.appendChild(span);
            });
            badgesContainer.style.transition = 'all 0.5s ease';
            badgesContainer.style.opacity = '1';
            badgesContainer.style.transform = 'translateY(0)';
        }, 300);
    }

    // Toast Notification System
    function showToast(message) {
        // Remove existing toast if visible
        const existingToast = document.querySelector('.toast-notif');
        if (existingToast) existingToast.remove();

        const toast = document.createElement('div');
        toast.className = 'toast-notif';
        toast.innerHTML = message;
        
        // Setup styles in JS for easy self-containment
        Object.assign(toast.style, {
            position: 'fixed',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%) translateY(40px)',
            backgroundColor: 'var(--slate-900)',
            color: 'var(--white)',
            padding: '12px 24px',
            borderRadius: '99px',
            fontSize: '13px',
            fontWeight: '600',
            boxShadow: 'var(--widget-shadow)',
            zIndex: '200',
            opacity: '0',
            pointerEvents: 'none',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        });

        document.body.appendChild(toast);

        // Animate entrance
        requestAnimationFrame(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateX(-50%) translateY(0)';
        });

        // Exit after delay
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(-50%) translateY(40px)';
            setTimeout(() => toast.remove(), 400);
        }, 3500);
    }

    // Double-click to Edit interactive feature
    cvCard.addEventListener('dblclick', (e) => {
        const editableElement = e.target.closest('.cv-name, .cv-title, .cv-section-p, .cv-item-role, .cv-item-company, .contact-val, .skill-tag');
        if (!editableElement) return;

        const originalText = editableElement.textContent;
        const input = document.createElement('textarea');
        input.value = originalText;
        
        // Styling matches the source element
        Object.assign(input.style, {
            width: '100%',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            fontWeight: 'inherit',
            color: 'inherit',
            background: 'var(--slate-50)',
            border: '1px solid var(--primary-blue)',
            outline: 'none',
            padding: '2px',
            borderRadius: '2px',
            resize: 'none'
        });

        editableElement.replaceWith(input);
        input.focus();

        const saveChanges = () => {
            const newText = input.value.trim() || originalText;
            editableElement.textContent = newText;
            input.replaceWith(editableElement);
            showToast("💾 Changes saved locally in preview builder!");
            
            // Recalculate ATS Score slightly dynamically on manual edit!
            const randomDelta = Math.floor(Math.random() * 5) - 2; // -2 to +2
            const baseScore = isAiOptimized ? 98 : cvOriginalContent.atsScores[currentTemplate];
            const finalScore = Math.max(70, Math.min(100, baseScore + randomDelta));
            animateAtsScore(finalScore);
        };

        input.addEventListener('blur', saveChanges);
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                saveChanges();
            }
        });
    });

    // Hero CTA primary action
    heroCtaBuild.addEventListener('click', () => {
        showToast("🚀 Initializing CVPilot App builder... Accessing free account sandbox!");
        setTimeout(() => {
            const toolbar = document.getElementById('cv-floating-toolbar');
            toolbar.style.transform = 'scale(1.1) translateX(-5px)';
            toolbar.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            setTimeout(() => {
                toolbar.style.transform = '';
            }, 600);
        }, 500);
    });

    // View Example CTA click action
    heroCtaExample.addEventListener('click', () => {
        showToast("🎬 Launching standard premium portfolio layout walkthrough...");
        let nextTpl = (parseInt(currentTemplate) % 8) + 1;
        const nextGridItem = document.getElementById(`tpl-item-${nextTpl}`);
        if (nextGridItem) nextGridItem.click();
    });

    // Mobile Menu Toggle simulation
    const mobileBtn = document.getElementById('mobile-menu-btn');
    mobileBtn.addEventListener('click', () => {
        showToast("📱 Mobile responsive header navigation drawer toggled!");
    });


    // -------------------------------------------------------------
    // 5. BILLING INTERVAL TOGGLE SWITCH
    // -------------------------------------------------------------
    const updatePricingDisplay = () => {
        if (isYearlyBilling) {
            billingSwitch.classList.add('yearly');
            toggleYearlyLabel.classList.add('active');
            toggleMonthlyLabel.classList.remove('active');
            
            // Apply 20% discount prices (calculated: Pro 12 -> 9.60, Exec 29 -> 23.20)
            pricePro.textContent = "9.60";
            priceExec.textContent = "23.20";
            periodPro.textContent = "/ month, billed yearly";
            periodExec.textContent = "/ month, billed yearly";
        } else {
            billingSwitch.classList.remove('yearly');
            toggleMonthlyLabel.classList.add('active');
            toggleYearlyLabel.classList.remove('active');
            
            // Reset to monthly standard values
            pricePro.textContent = "12";
            priceExec.textContent = "29";
            periodPro.textContent = "/ month";
            periodExec.textContent = "/ month";
        }
    };

    billingSwitch.addEventListener('click', () => {
        isYearlyBilling = !isYearlyBilling;
        updatePricingDisplay();
        showToast(`📅 Billing changed to ${isYearlyBilling ? 'Yearly (20% Savings applied!)' : 'Monthly interval'}`);
    });

    toggleMonthlyLabel.addEventListener('click', () => {
        if (!isYearlyBilling) return;
        isYearlyBilling = false;
        updatePricingDisplay();
    });

    toggleYearlyLabel.addEventListener('click', () => {
        if (isYearlyBilling) return;
        isYearlyBilling = true;
        updatePricingDisplay();
    });

    // Plan selections
    document.getElementById('btn-select-free').addEventListener('click', () => {
        showToast("💼 Welcome to the Basic Sandbox! Unlimited edits are unlocked locally.");
    });

    document.getElementById('btn-select-pro').addEventListener('click', () => {
        showToast(`💳 Heading to secure check-out: Pilot Pro Plan (${isYearlyBilling ? '$115.20 billed annually' : '$12/month'})`);
    });

    document.getElementById('btn-select-exec').addEventListener('click', () => {
        showToast(`👑 Heading to secure check-out: Executive Elite Plan (${isYearlyBilling ? '$278.40 billed annually' : '$29/month'})`);
    });


    // -------------------------------------------------------------
    // 6. DYNAMIC FAQ ACCORDION HANDLER
    // -------------------------------------------------------------
    faqTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
            const content = trigger.nextElementSibling;
            
            // Collapse all other FAQ items first
            faqTriggers.forEach(otherTrigger => {
                if (otherTrigger !== trigger) {
                    otherTrigger.setAttribute('aria-expanded', 'false');
                    otherTrigger.nextElementSibling.style.maxHeight = null;
                }
            });

            // Toggle current item
            if (isExpanded) {
                trigger.setAttribute('aria-expanded', 'false');
                content.style.maxHeight = null;
            } else {
                trigger.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });


    // -------------------------------------------------------------
    // 7. FOOTER NEWSLETTER SUBSCRIPTION HANDLER
    // -------------------------------------------------------------
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailVal = newsletterEmail.value.trim();
        
        if (emailVal) {
            showToast(`📧 Success! ${emailVal} is subscribed to CVPilot career updates.`);
            newsletterEmail.value = '';
            
            // Add light bounce to submit button
            const submitBtn = document.getElementById('btn-subscribe-submit');
            submitBtn.style.transform = 'scale(1.15)';
            setTimeout(() => {
                submitBtn.style.transform = '';
            }, 300);
        }
    });


    // -------------------------------------------------------------
    // 8. HIGH-FIDELITY TEMPLATE CUSTOMIZER STUDIO MODAL SYSTEM
    // -------------------------------------------------------------
    const studioModal = document.getElementById('studio-modal');
    const closeStudioBtn = document.getElementById('close-studio-modal');
    const clickableShowcaseCards = document.querySelectorAll('.clickable-template-card');
    const modalCvCanvas = document.getElementById('modal-cv-canvas');
    
    const modalColorPicker = document.getElementById('modal-color-picker');
    const modalFontPicker = document.getElementById('modal-font-picker');
    const modalAiOptimizeBtn = document.getElementById('modal-ai-optimize-btn');
    const modalBtnDownload = document.getElementById('modal-btn-download');
    
    const modalAtsScoreNum = document.getElementById('modal-ats-score-num');
    const modalAtsProgress = document.getElementById('modal-ats-progress');
    const modalAtsStatusBadge = document.getElementById('modal-ats-status-badge');

    let activeModalShowcaseId = null;
    let modalAtsScore = 0;
    let modalIsAiOptimized = false;

    // Premium dynamic design color palettes for each theme
    const themePalettes = {
        slate: [
            { name: "Cobalt Slate (Default)", primary: "#3b82f6", dark: "#0f172a" },
            { name: "Emerald Luxe", primary: "#10b981", dark: "#064e3b" },
            { name: "Amber Executive", primary: "#f59e0b", dark: "#78350f" },
            { name: "Graphite Monolith", primary: "#475569", dark: "#1e293b" }
        ],
        purple: [
            { name: "Deep Violet (Default)", primary: "#8b5cf6", dark: "#f5f3ff" },
            { name: "Crimson Love", primary: "#ec4899", dark: "#fdf2f8" },
            { name: "Forest Sage", primary: "#10b981", dark: "#f0fdf4" },
            { name: "Midnight Neon", primary: "#6366f1", dark: "#1e1b4b" }
        ],
        minimalist: [
            { name: "Classic Charcoal (Default)", primary: "#1e293b", dark: "#ffffff" },
            { name: "Burgundy Corporate", primary: "#881337", dark: "#fff1f2" },
            { name: "Deep Teal", primary: "#0f766e", dark: "#f0fdfa" },
            { name: "Platinum Noir", primary: "#0f172a", dark: "#f8fafc" }
        ]
    };

    // Helper functions to dynamically customize templates in real-time
    function applySlatePalette(palette) {
        const initialsBadge = modalCvCanvas.querySelector('.mini-cv-header div[style*="border-radius: 50%"]');
        if (initialsBadge) initialsBadge.style.backgroundColor = palette.primary;
        
        const titles = modalCvCanvas.querySelectorAll('.mini-cv-section-title');
        titles.forEach(t => {
            t.style.color = palette.primary;
            t.style.borderBottomColor = palette.primary + '30';
        });

        const divider = modalCvCanvas.querySelector('.mini-cv-divider');
        if (divider) divider.style.backgroundColor = palette.primary;
    }

    function applyPurplePalette(palette) {
        const sidebar = modalCvCanvas.querySelector('.showcase-cv-sidebar');
        if (sidebar) {
            sidebar.style.backgroundColor = palette.dark;
            sidebar.style.borderColor = palette.primary + '25';
            
            // Adapt sidebar text color if dark or light background
            const isDarkBg = palette.dark === '#1e1b4b';
            sidebar.style.color = isDarkBg ? '#e0e7ff' : '#475569';
            
            const sidebarTexts = sidebar.querySelectorAll('.mini-cv-text');
            sidebarTexts.forEach(t => {
                t.style.color = isDarkBg ? '#c7d2fe' : '#475569';
            });
        }
        
        const initialsBadge = modalCvCanvas.querySelector('.showcase-cv-sidebar div[style*="border-radius: 50%"]');
        if (initialsBadge) initialsBadge.style.backgroundColor = palette.primary;
        
        const sidebarTitles = modalCvCanvas.querySelectorAll('.showcase-cv-sidebar .mini-cv-section-title');
        sidebarTitles.forEach(t => t.style.color = palette.primary);

        const name = modalCvCanvas.querySelector('.mini-cv-name');
        if (name) name.style.color = palette.primary;

        const titles = modalCvCanvas.querySelectorAll('.mini-cv-section-title');
        titles.forEach(t => {
            t.style.color = palette.primary;
            t.style.borderBottomColor = palette.primary + '25';
        });
    }

    function applyMinimalistPalette(palette) {
        const name = modalCvCanvas.querySelector('.mini-cv-name');
        if (name) name.style.color = palette.primary;
        
        const titleBar = modalCvCanvas.querySelector('.mini-cv-title');
        if (titleBar) titleBar.style.borderBottomColor = palette.primary;
        
        const titles = modalCvCanvas.querySelectorAll('.mini-cv-section-title');
        titles.forEach(t => {
            t.style.color = palette.primary;
            t.style.borderBottomColor = palette.primary + '40';
        });

        // Set paper background warm ivory or white
        modalCvCanvas.style.backgroundColor = palette.dark === '#ffffff' ? '#ffffff' : palette.dark;
    }

    function applyPalette(themeId, palette) {
        if (themeId === 'slate') {
            applySlatePalette(palette);
        } else if (themeId === 'purple') {
            applyPurplePalette(palette);
        } else if (themeId === 'minimalist') {
            applyMinimalistPalette(palette);
        }
    }

    // Render Swatches Picker
    function renderPaletteButtons(themeId) {
        modalColorPicker.innerHTML = '';
        const palettes = themePalettes[themeId];
        palettes.forEach((p, idx) => {
            const btn = document.createElement('button');
            btn.className = `palette-swapper-btn ${idx === 0 ? 'active' : ''}`;
            btn.style.backgroundColor = p.primary;
            btn.title = p.name;
            
            btn.innerHTML = `
                <svg class="palette-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            `;
            
            btn.addEventListener('click', () => {
                modalColorPicker.querySelectorAll('.palette-swapper-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                applyPalette(themeId, p);
                showToast(`🎨 Theme color palette switched to "${p.name}"`);
                
                // Fine adjustments to score for matching palette accent triggers
                updateModalAtsScore(Math.min(modalAtsScore + 1, 100));
            });
            
            modalColorPicker.appendChild(btn);
        });
    }

    // Numeric counter animation helper
    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Modal ATS score animator
    function updateModalAtsScore(targetScore) {
        if (targetScore > 100) targetScore = 100;
        if (targetScore < 0) targetScore = 0;
        const previousScore = modalAtsScore;
        modalAtsScore = targetScore;
        
        // Count up label
        animateValue(modalAtsScoreNum, previousScore, targetScore, 700);
        
        // Circular gauge dash array progress
        const dashArray = 264;
        const offset = dashArray - (dashArray * targetScore) / 100;
        modalAtsProgress.style.strokeDashoffset = offset;
        
        // Color state tags based on metrics
        if (targetScore >= 95) {
            modalAtsProgress.style.stroke = '#10b981'; // Green
            modalAtsStatusBadge.textContent = 'Excellent Match!';
            modalAtsStatusBadge.style.color = '#10b981';
        } else if (targetScore >= 88) {
            modalAtsProgress.style.stroke = '#3b82f6'; // Blue
            modalAtsStatusBadge.textContent = 'Strong Match!';
            modalAtsStatusBadge.style.color = '#3b82f6';
        } else {
            modalAtsProgress.style.stroke = '#f59e0b'; // Amber
            modalAtsStatusBadge.textContent = 'Good Potential';
            modalAtsStatusBadge.style.color = '#f59e0b';
        }
    }

    // Make elements on modal resume editable in-context
    function makeCanvasElementsEditable() {
        const editableSelectors = [
            '.mini-cv-name', 
            '.mini-cv-title', 
            '.mini-cv-text', 
            '.mini-cv-item-title', 
            '.mini-cv-item-company', 
            '.mini-cv-bullets li', 
            '.mini-cv-tag'
        ];
        
        editableSelectors.forEach(selector => {
            const elements = modalCvCanvas.querySelectorAll(selector);
            elements.forEach(el => {
                el.setAttribute('contenteditable', 'true');
                el.setAttribute('spellcheck', 'false');
                
                // Listen to keyboard inputs to simulate calculating score dynamically
                el.addEventListener('input', () => {
                    const length = el.textContent.length;
                    // Adding content slightly raises score, removing lowers it, simulating scanner checks
                    const fluctuation = Math.min(Math.floor(length / 22), 3);
                    const baseScore = activeModalShowcaseId === 'slate' ? 95 : (activeModalShowcaseId === 'purple' ? 92 : 89);
                    const finalScore = Math.min((modalIsAiOptimized ? 98 : baseScore) + fluctuation, 100);
                    
                    // Direct quick update to avoid full animated ticks during every keypress
                    modalAtsScore = finalScore;
                    modalAtsScoreNum.textContent = finalScore;
                    const dashArray = 264;
                    const offset = dashArray - (dashArray * finalScore) / 100;
                    modalAtsProgress.style.strokeDashoffset = offset;
                });
            });
        });
    }

    // Bind cards click to open Customizer overlay modal
    clickableShowcaseCards.forEach(card => {
        card.addEventListener('click', () => {
            const showcaseId = card.getAttribute('data-showcase-id');
            activeModalShowcaseId = showcaseId;
            modalIsAiOptimized = false;
            
            // Get original mini CV inside the card
            const innerCv = card.querySelector('.showcase-inner-cv');
            if (!innerCv) return;
            
            // Clone and prepare high fidelity elements
            const clonedCv = innerCv.cloneNode(true);
            clonedCv.removeAttribute('style'); // Clear specific thumbnail bounds style
            
            // Clean previous overrides
            modalCvCanvas.innerHTML = '';
            modalCvCanvas.appendChild(clonedCv);
            modalCvCanvas.style.backgroundColor = '';
            
            // Default styling presets
            modalCvCanvas.className = "studio-interactive-cv-paper";
            
            modalFontPicker.querySelectorAll('.font-picker-btn').forEach(btn => btn.classList.remove('active'));
            if (showcaseId === 'minimalist') {
                modalFontPicker.querySelector('[data-font="serif"]').classList.add('active');
                modalCvCanvas.classList.add('font-serif');
            } else {
                modalFontPicker.querySelector('[data-font="sans"]').classList.add('active');
                modalCvCanvas.classList.add('font-sans');
            }
            
            // Activate contenteditable tags
            makeCanvasElementsEditable();
            
            // Render colors options
            renderPaletteButtons(showcaseId);
            
            // Display Modal overlay
            studioModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Stop standard page scroll
            
            // Initial score check animation
            let initialScore = 92;
            if (showcaseId === 'slate') initialScore = 95;
            if (showcaseId === 'purple') initialScore = 92;
            if (showcaseId === 'minimalist') initialScore = 89;
            
            setTimeout(() => {
                updateModalAtsScore(initialScore);
            }, 350);
            
            showToast(`✨ Opened Template Editor Studio: "${card.querySelector('.showcase-title').textContent}" layout loaded.`);
        });
    });

    // Close Modal triggers
    const closeModal = () => {
        studioModal.classList.remove('active');
        document.body.style.overflow = '';
        showToast("💼 Template customizer studio closed. Progress cached.");
    };
    
    closeStudioBtn.addEventListener('click', closeModal);
    
    studioModal.addEventListener('click', (e) => {
        if (e.target === studioModal) {
            closeModal();
        }
    });

    // Typography selector events
    const fontPickerBtns = modalFontPicker.querySelectorAll('.font-picker-btn');
    fontPickerBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            fontPickerBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const font = btn.getAttribute('data-font');
            modalCvCanvas.classList.remove('font-sans', 'font-serif', 'font-monospace');
            modalCvCanvas.classList.add(`font-${font}`);
            
            showToast(`🔤 Typographic profile updated to: ${btn.querySelector('.font-name-label').textContent}`);
            updateModalAtsScore(Math.min(modalAtsScore + 2, 100)); // Layout alignment boost
        });
    });

    // AI Copilot Suggestion writing event
    modalAiOptimizeBtn.addEventListener('click', () => {
        if (modalIsAiOptimized) {
            showToast("✦ AI Copilot: Resume layout vocabulary already fully optimized!");
            return;
        }
        
        modalAiOptimizeBtn.disabled = true;
        modalAiOptimizeBtn.innerHTML = `✦ AI Keywords Scanning...`;
        modalCvCanvas.classList.add('ai-modal-writing');
        
        showToast("🤖 AI Copilot analyzing text spacing, grammar & passive verbs...");
        
        setTimeout(() => {
            modalAiOptimizeBtn.innerHTML = `✦ Restructuring Bullets...`;
            
            // Rewrite paragraphs and bullets with powerful typewriter animation
            const summaryNode = modalCvCanvas.querySelector('.mini-cv-text');
            const bulletNodes = modalCvCanvas.querySelectorAll('.mini-cv-bullets li');
            
            if (summaryNode) {
                const optimizedSummaryText = "Highly accomplished, growth-oriented Marketing Manager with 5+ years of digital ecosystem leadership. Proven expertise spearheading ROI-driven omni-channel growth campaigns, directing cross-functional squads, and optimizing $500K+ ad budgets. Captured a consistent 45% traffic expansion via keyword models and boosted acquisition metrics by 35%.";
                typewriterEffect(summaryNode, optimizedSummaryText, 18);
            }
            
            if (bulletNodes.length > 0) {
                const optimizedBulletTexts = [
                    "Engineered and executed organic SEO strategies that increased web domain traffic by 45% in 8 months.",
                    "Pioneered data-driven retargeting campaigns that shaved CPA margins by 35% and increased high-value pipeline generation."
                ];
                bulletNodes.forEach((node, idx) => {
                    if (optimizedBulletTexts[idx]) {
                        setTimeout(() => {
                            typewriterEffect(node, optimizedBulletTexts[idx], 18);
                        }, idx * 600);
                    }
                });
            }
            
            setTimeout(() => {
                modalIsAiOptimized = true;
                modalAiOptimizeBtn.disabled = false;
                modalAiOptimizeBtn.innerHTML = `✦ AI Optimize Resume`;
                modalCvCanvas.classList.remove('ai-modal-writing');
                
                updateModalAtsScore(100); // Max perfect index!
                showToast("🏆 AI Copilot successfully rewrote CV content. Recruiter ATS Index: 100% Perfect Match!");
            }, 1500);
            
        }, 1200);
    });

    // Simulated typing animator helper
    function typewriterEffect(element, text, speed) {
        element.innerHTML = '';
        let i = 0;
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // High fidelity PDF mockup export trigger
    modalBtnDownload.addEventListener('click', () => {
        modalBtnDownload.disabled = true;
        const originalText = modalBtnDownload.innerHTML;
        
        const compileSteps = [
            "Compiling Vector Shapes...",
            "Checking Readability Alignments...",
            "Packaging PDF Layout Structure...",
            "Encrypting Digital Placement PDF..."
        ];
        
        let stepIdx = 0;
        
        const executeCompile = () => {
            if (stepIdx < compileSteps.length) {
                modalBtnDownload.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 14px; height: 14px; margin-right: 8px; display: inline-block; vertical-align: -1.5px; animation: spin-loader 0.8s infinite linear;"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
                    ${compileSteps[stepIdx]}
                `;
                stepIdx++;
                setTimeout(executeCompile, 650);
            } else {
                modalBtnDownload.disabled = false;
                modalBtnDownload.innerHTML = originalText;
                
                const nameNode = modalCvCanvas.querySelector('.mini-cv-name');
                const name = nameNode ? nameNode.textContent.trim().replace(/\s+/g, '_') : 'James_Anderson';
                const filename = `${name}_CVPilot_Resume.pdf`;
                
                // Setup local mockup blob triggers
                const fileBlob = new Blob(["%PDF-1.5 CVPilot high-fidelity exported customized resume document file."], {type: "application/pdf"});
                const a = document.createElement("a");
                a.href = URL.createObjectURL(fileBlob);
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                
                showToast(`🏆 Premium PDF document "${filename}" successfully generated and downloaded!`);
            }
        };
        
        executeCompile();
    });


    // =============================================================
    // 9. HIGH-FIDELITY CLIENT-SIDE AUTHENTICATION SYSTEM
    // =============================================================
    const authModal = document.getElementById('auth-modal');
    const closeAuthBtn = document.getElementById('close-auth-modal');
    const btnHeaderLogin = document.getElementById('btn-login');
    const btnHeaderSignup = document.getElementById('btn-signup');
    
    const tabLogin = document.getElementById('tab-login');
    const tabSignup = document.getElementById('tab-signup');
    const tabIndicator = document.querySelector('.auth-tab-indicator');
    const loginFormContainer = document.getElementById('login-form-container');
    const signupFormContainer = document.getElementById('signup-form-container');
    
    const loginForm = document.getElementById('auth-login-form');
    const signupForm = document.getElementById('auth-signup-form');
    const signupPasswordInput = document.getElementById('signup-password');
    const authSuccessOverlay = document.getElementById('auth-success-overlay');
    const authSuccessMessage = document.getElementById('auth-success-message');
    
    const navActionsContainer = document.querySelector('.nav-actions');

    // State
    let isLoggedIn = false;
    let loggedInUser = {
        name: "",
        email: ""
    };

    // Helper to position tab underline indicator
    function updateTabIndicator(activeTab) {
        tabIndicator.style.width = `${activeTab.offsetWidth}px`;
        tabIndicator.style.left = `${activeTab.offsetLeft}px`;
    }

    // Toggle Active tab state helper
    function switchAuthTab(targetTabId) {
        if (targetTabId === 'tab-login') {
            tabLogin.classList.add('active');
            tabSignup.classList.remove('active');
            loginFormContainer.classList.add('active');
            signupFormContainer.classList.remove('active');
            updateTabIndicator(tabLogin);
        } else {
            tabSignup.classList.add('active');
            tabLogin.classList.remove('active');
            signupFormContainer.classList.add('active');
            loginFormContainer.classList.remove('active');
            updateTabIndicator(tabSignup);
        }
    }

    // Bind Header actions to open Auth Modal
    if (btnHeaderLogin) {
        btnHeaderLogin.addEventListener('click', () => {
            authModal.classList.add('active');
            switchAuthTab('tab-login');
            document.body.style.overflow = 'hidden'; // Lock page scroll
            showToast("🔑 Access Dashboard: Log in form opened.");
        });
    }

    if (btnHeaderSignup) {
        btnHeaderSignup.addEventListener('click', () => {
            authModal.classList.add('active');
            switchAuthTab('tab-signup');
            document.body.style.overflow = 'hidden';
            showToast("✦ Welcome! Sign up form opened.");
        });
    }

    // Bind Close actions
    const closeAuthModal = () => {
        authModal.classList.remove('active');
        authSuccessOverlay.classList.remove('active');
        document.body.style.overflow = '';
        
        // Clear inputs safely
        loginForm.reset();
        signupForm.reset();
        resetPasswordStrength();
    };

    closeAuthBtn.addEventListener('click', closeAuthModal);
    
    authModal.addEventListener('click', (e) => {
        if (e.target === authModal) {
            closeAuthModal();
        }
    });

    // Bind Tabs click event
    tabLogin.addEventListener('click', () => switchAuthTab('tab-login'));
    tabSignup.addEventListener('click', () => switchAuthTab('tab-signup'));

    // Handle Password Visibility Toggle
    const passwordToggleButtons = document.querySelectorAll('.password-toggle-btn');
    passwordToggleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const input = btn.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                btn.style.color = 'var(--primary-blue)';
            } else {
                input.type = 'password';
                btn.style.color = 'var(--slate-400)';
            }
        });
    });

    // Reset password strength bar helper
    function resetPasswordStrength() {
        const segments = [1, 2, 3, 4].map(num => document.getElementById(`strength-segment-${num}`));
        const label = document.getElementById('password-strength-text');
        
        segments.forEach(seg => {
            if (seg) seg.style.backgroundColor = 'rgba(226, 232, 240, 0.6)';
        });
        if (label) {
            label.textContent = "Password is empty";
            label.style.color = "var(--slate-500)";
        }
    }

    // Password Strength Verification Check
    if (signupPasswordInput) {
        signupPasswordInput.addEventListener('input', () => {
            const val = signupPasswordInput.value;
            const segments = [1, 2, 3, 4].map(num => document.getElementById(`strength-segment-${num}`));
            const label = document.getElementById('password-strength-text');
            
            if (!val) {
                resetPasswordStrength();
                return;
            }

            let score = 0;
            
            // Criteria checks
            if (val.length >= 6) score = 1;
            if (val.length >= 8 && /[0-9]/.test(val)) score = 2;
            if (val.length >= 10 && /[A-Z]/.test(val) && /[a-z]/.test(val)) score = 3;
            if (val.length >= 12 && /[^A-Za-z0-9]/.test(val)) score = 4;
            
            // Reset segment styles
            segments.forEach(seg => {
                if (seg) seg.style.backgroundColor = 'rgba(226, 232, 240, 0.6)';
            });

            // Color mappings based on secure parameters
            if (score === 1) {
                segments[0].style.backgroundColor = '#ef4444'; // Red
                label.textContent = "Weak: Too simple";
                label.style.color = '#ef4444';
            } else if (score === 2) {
                segments[0].style.backgroundColor = '#f59e0b'; // Amber
                segments[1].style.backgroundColor = '#f59e0b';
                label.textContent = "Medium: Good length";
                label.style.color = '#f59e0b';
            } else if (score === 3) {
                segments[0].style.backgroundColor = '#10b981'; // Greenish
                segments[1].style.backgroundColor = '#10b981';
                segments[2].style.backgroundColor = '#10b981';
                label.textContent = "Strong: Mix parameters met";
                label.style.color = '#10b981';
            } else if (score === 4) {
                segments.forEach(seg => {
                    if (seg) seg.style.backgroundColor = '#059669'; // Dark emerald
                });
                label.textContent = "Excellent: Fully Secure Workspace Unlocked!";
                label.style.color = '#059669';
            }
        });
    }

    // Toggle dropdown profile handler
    function bindDropdownEvents() {
        const badge = document.getElementById('user-profile-badge');
        if (!badge) return;

        badge.addEventListener('click', (e) => {
            badge.classList.toggle('active');
            e.stopPropagation();
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            badge.classList.remove('active');
        });

        // Dropdown actions: logout
        const logoutBtn = document.getElementById('btn-dropdown-logout');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                performLogout();
            });
        }
    }

    // Switch Header markup based on logged state
    function applyLoggedInHeader(name) {
        loggedInUser.name = name;
        isLoggedIn = true;
        
        // Save to browser persistence database
        localStorage.setItem('cvpilot_session', JSON.stringify({ name: name }));
        
        // Split initials
        const parts = name.split(/\s+/);
        const initials = parts.map(p => p.charAt(0).toUpperCase()).slice(0, 2).join('');
        
        // Replace Nav Actions with Dropdown widget
        navActionsContainer.innerHTML = `
            <div class="user-profile-badge" id="user-profile-badge">
                <div class="user-avatar">${initials || 'U'}</div>
                <span class="user-name-span">${name}</span>
                <svg class="user-badge-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 10px; height: 10px; margin-left: 2px;"><polyline points="6 9 12 15 18 9"></polyline></svg>
                
                <!-- Dropdown panel menu -->
                <div class="user-dropdown-menu">
                    <div class="dropdown-header-meta">
                        <h6>${name}</h6>
                        <p>Executive Plan Member</p>
                    </div>
                    <button class="dropdown-item-btn" type="button" onclick="showToast('💼 Loaded my saved CV folders (3).')">
                        💼 My Resumes (3)
                    </button>
                    <button class="dropdown-item-btn" type="button" onclick="showToast('⚙️ Settings panel loaded.')">
                        ⚙️ Account Settings
                    </button>
                    <button class="dropdown-item-btn btn-logout" id="btn-dropdown-logout" type="button">
                        🚪 Log Out
                    </button>
                </div>
            </div>
        `;
        
        // Re-bind click event to profile badges
        bindDropdownEvents();
    }

    // Switch Header markup back to guest
    function performLogout() {
        isLoggedIn = false;
        loggedInUser = { name: "", email: "" };
        
        // Clear local storage persistence
        localStorage.removeItem('cvpilot_session');
        
        // Reset Nav Actions
        navActionsContainer.innerHTML = `
            <button class="btn btn-text" id="btn-login">Log in</button>
            <button class="btn btn-primary" id="btn-signup">Sign Up Free</button>
        `;
        
        // Re-bind listeners on new elements
        const newLogin = document.getElementById('btn-login');
        const newSignup = document.getElementById('btn-signup');
        
        newLogin.addEventListener('click', () => {
            authModal.classList.add('active');
            switchAuthTab('tab-login');
            document.body.style.overflow = 'hidden';
            showToast("🔑 Access Dashboard: Log in form opened.");
        });
        
        newSignup.addEventListener('click', () => {
            authModal.classList.add('active');
            switchAuthTab('tab-signup');
            document.body.style.overflow = 'hidden';
            showToast("✦ Welcome! Sign up form opened.");
        });
        
        showToast("🚪 Successfully logged out of CVPilot workspace.");
    }

    // Handle Login Submit
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value.trim();
        const btnSubmit = document.getElementById('btn-login-submit');
        
        btnSubmit.disabled = true;
        btnSubmit.innerHTML = `Validating Credentials...`;
        
        // Simple mock login profile extraction
        const parsedName = email.split('@')[0];
        const formattedName = parsedName.charAt(0).toUpperCase() + parsedName.slice(1);
        const nameToUse = formattedName === 'Shivam-dhoundiyal' ? 'Shivam Dhoundiyal' : (formattedName === 'James' ? 'James Anderson' : formattedName);
        
        setTimeout(() => {
            btnSubmit.innerHTML = `Unlocking Workspace...`;
            
            setTimeout(() => {
                // Show celebration overlay screen
                authSuccessMessage.textContent = `Welcome back, ${nameToUse}! Provisioning personalized sandbox canvas...`;
                authSuccessOverlay.classList.add('active');
                
                setTimeout(() => {
                    applyLoggedInHeader(nameToUse);
                    closeAuthModal();
                    showToast(`✨ Welcome back, ${nameToUse}! Account unlocked successfully.`);
                }, 1900);
                
            }, 600);
            
        }, 1000);
    });

    // Handle Sign Up Submit
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signup-name').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const btnSubmit = document.getElementById('btn-signup-submit');
        
        btnSubmit.disabled = true;
        btnSubmit.innerHTML = `Creating Secure Workspace...`;
        
        setTimeout(() => {
            btnSubmit.innerHTML = `Caching templates...`;
            
            setTimeout(() => {
                // Show celebration overlay screen
                authSuccessMessage.textContent = `Welcome, ${name}! Your Premium Sandbox Workspace has been successfully activated.`;
                authSuccessOverlay.classList.add('active');
                
                setTimeout(() => {
                    applyLoggedInHeader(name);
                    closeAuthModal();
                    showToast(`🏆 Welcome to CVPilot, ${name}! Premium templates are fully unlocked.`);
                    
                    // Trigger mock verification welcome email dispatch notification
                    setTimeout(() => {
                        showToast(`✉️ Welcome Dispatch: A welcoming setup guide has been sent to your inbox at ${email}!`);
                    }, 2800);
                    
                }, 1900);
                
            }, 600);
            
        }, 1000);
    });

    // Restore previous workspace state on refresh/load
    function checkExistingSession() {
        const savedSession = localStorage.getItem('cvpilot_session');
        if (savedSession) {
            try {
                const sessionData = JSON.parse(savedSession);
                applyLoggedInHeader(sessionData.name);
                showToast(`✨ Welcome back, ${sessionData.name}! Workspace session auto-restored.`);
            } catch (err) {
                localStorage.removeItem('cvpilot_session');
            }
        }
    }
    
    // Run auto-login restoration scan
    checkExistingSession();
});


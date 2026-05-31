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

    // Resources Dropdown Mobile/Click Support
    const resourcesToggle = document.getElementById('nav-resources');
    const resourcesDropdown = document.getElementById('resources-dropdown-menu');
    if (resourcesToggle && resourcesDropdown) {
        resourcesToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const isActive = resourcesToggle.parentElement.classList.contains('active');
            
            // Close other active modules
            resourcesToggle.parentElement.classList.toggle('active');
            showToast(isActive ? "📂 Resources dropdown hidden." : "📂 Resources dropdown toggled.");
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (resourcesToggle && !resourcesToggle.contains(e.target) && !resourcesDropdown.contains(e.target)) {
                resourcesToggle.parentElement.classList.remove('active');
            }
        });
    }

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
    const editorTabButtons = document.querySelectorAll('.editor-tab-btn');
    const editorContentPanel = document.querySelector('.editor-content-panel');
    const editorAddContentBtn = document.querySelector('.editor-add-content-btn');
    const editorProfileEditBtn = document.querySelector('.profile-edit-btn');
    const editorTopActions = document.querySelector('.editor-top-actions');

    let activeModalShowcaseId = null;
    let modalAtsScore = 0;
    let modalIsAiOptimized = false;
    let editorToolPanel = null;
    let editorMoreMenu = null;

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
        ],
        emerald: [
            { name: "Emerald Mint (Default)", primary: "#10b981", dark: "#064e3b" },
            { name: "Forest Sage", primary: "#059669", dark: "#022c22" },
            { name: "Teal Corporate", primary: "#0d9488", dark: "#111827" },
            { name: "Cyberpunk Green", primary: "#22c55e", dark: "#090d16" }
        ],
        amethyst: [
            { name: "Amethyst Split (Default)", primary: "#7c3aed", dark: "#faf5ff" },
            { name: "Pink Magenta", primary: "#d946ef", dark: "#fdf4ff" },
            { name: "Midnight Indigo", primary: "#4f46e5", dark: "#e0e7ff" },
            { name: "Warm Amber", primary: "#f59e0b", dark: "#fef3c7" }
        ],
        saffron: [
            { name: "Saffron Gold (Default)", primary: "#d97706", dark: "#ffffff" },
            { name: "Crimson Red", primary: "#ef4444", dark: "#fff5f5" },
            { name: "Burnt Orange", primary: "#ea580c", dark: "#fff7ed" },
            { name: "Slate Dark", primary: "#334155", dark: "#f8fafc" }
        ],
        wayne: [
            { name: "Deep Navy (Default)", primary: "#183746", dark: "#183746" },
            { name: "Graphite Navy", primary: "#334155", dark: "#111827" },
            { name: "Executive Teal", primary: "#0f766e", dark: "#134e4a" },
            { name: "Burgundy Boardroom", primary: "#9f1239", dark: "#4c0519" }
        ],
        rivera: [
            { name: "Warm Stone (Default)", primary: "#4b5563", dark: "#e2e2df" },
            { name: "Sales Blue", primary: "#2563eb", dark: "#dbeafe" },
            { name: "Olive Ledger", primary: "#4d7c0f", dark: "#ecfccb" },
            { name: "Soft Charcoal", primary: "#1f2937", dark: "#e5e7eb" }
        ],
        patel: [
            { name: "Engineering Blue (Default)", primary: "#0f3446", dark: "#e8ecef" },
            { name: "Steel Gray", primary: "#475569", dark: "#f1f5f9" },
            { name: "Industrial Green", primary: "#15803d", dark: "#dcfce7" },
            { name: "Safety Amber", primary: "#d97706", dark: "#fef3c7" }
        ],
        "atlantic-blue": [
            { name: "Atlantic Blue (Default)", primary: "#2563eb", dark: "#dbeafe" },
            { name: "Deep Ocean", primary: "#0f3b66", dark: "#e0f2fe" },
            { name: "Emerald Atlantic", primary: "#059669", dark: "#dcfce7" },
            { name: "Graphite Blue", primary: "#334155", dark: "#e2e8f0" }
        ],
        "mercury-flow": [
            { name: "Mercury Gray (Default)", primary: "#4b5563", dark: "#f4f1eb" },
            { name: "Ink Serif", primary: "#18181b", dark: "#f8fafc" },
            { name: "Burgundy Serif", primary: "#9f1239", dark: "#fff1f2" },
            { name: "Executive Teal", primary: "#0f766e", dark: "#f0fdfa" }
        ],
        "steady-form": [
            { name: "Steady Slate (Default)", primary: "#475569", dark: "#f1f5f9" },
            { name: "Blue System", primary: "#2563eb", dark: "#dbeafe" },
            { name: "Green System", primary: "#16a34a", dark: "#dcfce7" },
            { name: "Amber System", primary: "#d97706", dark: "#fef3c7" }
        ],
        "classic-serif-flow": [
            { name: "Classic Ink (Default)", primary: "#27272a", dark: "#ffffff" },
            { name: "Warm Paper", primary: "#7c2d12", dark: "#fff7ed" },
            { name: "Formal Navy", primary: "#1e3a8a", dark: "#eff6ff" },
            { name: "Academic Green", primary: "#166534", dark: "#f0fdf4" }
        ],
        "executive-flow": [
            { name: "Boardroom Black (Default)", primary: "#111827", dark: "#e5e7eb" },
            { name: "Cobalt Boardroom", primary: "#1d4ed8", dark: "#dbeafe" },
            { name: "Burgundy Boardroom", primary: "#9f1239", dark: "#ffe4e6" },
            { name: "Forest Boardroom", primary: "#166534", dark: "#dcfce7" }
        ],
        "leaves-flow": [
            { name: "Leaf Green (Default)", primary: "#15803d", dark: "#dcfce7" },
            { name: "Sage Creative", primary: "#4d7c0f", dark: "#ecfccb" },
            { name: "Ocean Creative", primary: "#0f766e", dark: "#ccfbf1" },
            { name: "Rose Creative", primary: "#be185d", dark: "#fce7f3" }
        ],
        "saffron-line": [
            { name: "Saffron Line (Default)", primary: "#d97706", dark: "#fff7ed" },
            { name: "Crimson Line", primary: "#dc2626", dark: "#fee2e2" },
            { name: "Cobalt Line", primary: "#2563eb", dark: "#dbeafe" },
            { name: "Teal Line", primary: "#0d9488", dark: "#ccfbf1" }
        ],
        quicksilver: [
            { name: "Quicksilver (Default)", primary: "#64748b", dark: "#f1f5f9" },
            { name: "Graphite Silver", primary: "#334155", dark: "#e2e8f0" },
            { name: "Blue Silver", primary: "#2563eb", dark: "#e0f2fe" },
            { name: "Violet Silver", primary: "#7c3aed", dark: "#ede9fe" }
        ],
        "cobalt-edge": [
            { name: "Cobalt Edge (Default)", primary: "#1d4ed8", dark: "#dbeafe" },
            { name: "Indigo Edge", primary: "#4f46e5", dark: "#e0e7ff" },
            { name: "Teal Edge", primary: "#0d9488", dark: "#ccfbf1" },
            { name: "Charcoal Edge", primary: "#1f2937", dark: "#e5e7eb" }
        ],
        "compact-serif-flow": [
            { name: "Compact Serif (Default)", primary: "#27272a", dark: "#ffffff" },
            { name: "Navy Compact", primary: "#1e3a8a", dark: "#eff6ff" },
            { name: "Sepia Compact", primary: "#92400e", dark: "#fffbeb" },
            { name: "Emerald Compact", primary: "#047857", dark: "#ecfdf5" }
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
            const isDarkBg = palette.dark === '#1e1b4b' || palette.dark === '#e0e7ff';
            sidebar.style.color = isDarkBg ? '#475569' : '#475569';
            
            const sidebarTexts = sidebar.querySelectorAll('.mini-cv-text');
            sidebarTexts.forEach(t => {
                t.style.color = isDarkBg ? '#475569' : '#475569';
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

    function applyReferencePalette(themeId, palette) {
        const titles = modalCvCanvas.querySelectorAll('.mini-cv-section-title');
        titles.forEach(t => {
            t.style.backgroundColor = palette.dark;
            t.style.color = themeId === 'wayne' ? '#ffffff' : palette.primary;
        });

        const names = modalCvCanvas.querySelectorAll('.mini-cv-name');
        names.forEach(name => {
            name.style.color = themeId === 'wayne' ? '#ffffff' : palette.primary;
        });

        if (themeId === 'wayne') {
            const sidebar = modalCvCanvas.querySelector('.reference-sidebar');
            if (sidebar) sidebar.style.backgroundColor = palette.primary;
        } else {
            const topBand = modalCvCanvas.querySelector('.reference-topband');
            if (topBand) topBand.style.backgroundColor = palette.dark;
        }
    }

    function applyFlowcvPalette(palette) {
        const flowCv = modalCvCanvas.querySelector('.flowcv-template');
        if (!flowCv) return;

        flowCv.style.backgroundColor = '#ffffff';

        const headings = flowCv.querySelectorAll('.mini-cv-section-title, .mini-cv-tag');
        headings.forEach(el => {
            el.style.color = palette.primary;
        });

        const rules = flowCv.querySelectorAll('.flowcv-head, .flowcv-line-head, .flowcv-edge-head, .flowcv-centered-head');
        rules.forEach(el => {
            el.style.borderColor = palette.primary;
        });

        const initial = flowCv.querySelector('.flowcv-initial');
        if (initial) initial.style.backgroundColor = palette.primary;

        const band = flowCv.querySelector('.flowcv-band-head');
        if (band) {
            band.style.backgroundColor = palette.primary;
        }

        const leaf = flowCv.querySelector('.flowcv-leaf-mark');
        if (leaf) {
            leaf.style.backgroundColor = palette.dark;
        }
    }

    function applyPalette(themeId, palette) {
        if (themeId === 'slate' || themeId === 'emerald') {
            applySlatePalette(palette);
        } else if (themeId === 'purple' || themeId === 'amethyst') {
            applyPurplePalette(palette);
        } else if (themeId === 'minimalist' || themeId === 'saffron') {
            applyMinimalistPalette(palette);
        } else if (themeId === 'wayne' || themeId === 'rivera' || themeId === 'patel') {
            applyReferencePalette(themeId, palette);
        } else {
            applyFlowcvPalette(palette);
        }
    }

    // Render Swatches Picker
    function renderPaletteButtons(themeId) {
        modalColorPicker.innerHTML = '';
        const palettes = themePalettes[themeId] || themePalettes.slate;
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

    const modalBaseScores = {
        slate: 95,
        emerald: 95,
        rivera: 96,
        patel: 97,
        wayne: 94,
        "atlantic-blue": 96,
        "mercury-flow": 94,
        "steady-form": 95,
        "classic-serif-flow": 93,
        "executive-flow": 96,
        "leaves-flow": 91,
        "saffron-line": 95,
        quicksilver: 95,
        "cobalt-edge": 94,
        "compact-serif-flow": 94,
        purple: 92,
        amethyst: 92,
        minimalist: 89,
        saffron: 89
    };

    function getModalBaseScore(showcaseId) {
        return modalBaseScores[showcaseId] || 92;
    }

    function getActiveTemplateTitle() {
        if (!activeModalShowcaseId) return 'No template selected';
        const card = document.querySelector(`.clickable-template-card[data-showcase-id="${activeModalShowcaseId}"]`);
        return card?.querySelector('.showcase-title')?.textContent?.trim() || activeModalShowcaseId;
    }

    function setEditorSectionsVisible(isVisible) {
        editorContentPanel?.querySelectorAll('.editor-section-card, .editor-profile-card').forEach(card => {
            card.style.display = isVisible ? '' : 'none';
        });
        const addBtn = editorContentPanel?.querySelector('.editor-add-content-btn');
        if (addBtn) {
            addBtn.style.display = isVisible ? 'inline-flex' : 'none';
        }
    }

    function buildEditorContentSidebar() {
        if (!editorContentPanel) return;

        // Clear existing elements
        editorContentPanel.innerHTML = '';

        // 1. Retrieve profile details from canvas
        const nameNode = modalCvCanvas.querySelector('#cv-name-text') || modalCvCanvas.querySelector('.cv-name') || modalCvCanvas.querySelector('.mini-cv-name');
        const titleNode = modalCvCanvas.querySelector('#cv-title-text') || modalCvCanvas.querySelector('.cv-title') || modalCvCanvas.querySelector('.mini-cv-title');
        
        let email = '';
        let phone = '';
        let location = '';
        
        const contactNodes = modalCvCanvas.querySelectorAll('.cv-contact-item, [id*="email"], [id*="phone"], [id*="contact"], .cv-item-bullets li, .reference-contact-list p, .mini-cv-text');
        contactNodes.forEach(node => {
            const txt = node.textContent.trim();
            if (txt.includes('@')) email = txt;
            else if (txt.match(/\+?\d[\d-\s()]{7,15}/)) phone = txt;
            else if (txt.length > 3 && txt.length < 30 && !txt.includes('linkedin') && !txt.includes('github') && !email && !phone) {
                // simple location heuristic
                if (txt.includes(',') || txt.match(/[A-Z]{2}/)) location = txt;
            }
        });

        const name = nameNode ? nameNode.textContent.trim() : 'James Anderson';
        const title = titleNode ? titleNode.textContent.trim() : 'Marketing Manager';
        email = email || 'james.anderson@email.com';
        phone = phone || '+1 (555) 123-4567';
        location = location || 'New York, NY';

        // 2. Create the editor-profile-card
        const profileCard = document.createElement('section');
        profileCard.className = 'editor-profile-card';
        profileCard.innerHTML = `
            <div class="profile-details-info">
                <h3>${name}</h3>
                <p>${title}</p>
                <p style="font-size: 14px; margin-top: 8px; color: #6b7280;">${email} &bull; ${phone} &bull; ${location}</p>
            </div>
            <button class="profile-edit-btn" type="button" aria-label="Edit Profile">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><path d="m16.5 3.5 4 4L7 21H3v-4L16.5 3.5z"></path></svg>
                Edit
            </button>
        `;
        editorContentPanel.appendChild(profileCard);

        // 3. Multi-template section scraper
        const addedNodePaths = new Set();
        const sectionNodes = [];

        const registerSection = (node, titleNode, itemsQuery) => {
            if (!node || !titleNode || addedNodePaths.has(node)) return;
            const titleText = titleNode.textContent.trim();
            if (!titleText || titleText.toLowerCase().includes('contact')) return;
            
            addedNodePaths.add(node);
            sectionNodes.push({
                node,
                titleNode,
                titleText,
                itemsQuery
            });
        };

        // Slate/Emerald/Purple style templates
        modalCvCanvas.querySelectorAll('.cv-section').forEach(node => {
            registerSection(node, node.querySelector('.cv-section-title'), '.cv-item, .cv-item-role, .cv-section-p, .skill-tag, li');
        });

        // Wayne/Rivera style templates
        modalCvCanvas.querySelectorAll('.reference-sidebar-block').forEach(node => {
            registerSection(node, node.querySelector('.mini-cv-section-title'), '.mini-cv-text, .mini-cv-tag, li');
        });
        modalCvCanvas.querySelectorAll('.reference-main section, .reference-main > div').forEach(node => {
            registerSection(node, node.querySelector('.mini-cv-section-title'), '.mini-cv-item, .mini-cv-item-title, .mini-cv-tag, li');
        });

        // FlowCV style templates
        modalCvCanvas.querySelectorAll('.flowcv-template section, .flowcv-column section, [class*="-template"] section, [class*="-template"] .cv-section').forEach(node => {
            registerSection(node, node.querySelector('.mini-cv-section-title, .cv-section-title, h3, h4'), '.cv-item, .mini-cv-text, .mini-cv-tag, li');
        });

        // Build sidebar cards
        sectionNodes.forEach((sec, secIdx) => {
            const sectionCard = document.createElement('section');
            sectionCard.className = 'editor-section-card collapsed';
            sectionCard.dataset.sectionIndex = secIdx;

            // Generate rows for each item or entry
            const items = sec.node.querySelectorAll(sec.itemsQuery);
            let rowsHtml = '';
            
            items.forEach((itemNode, itemIdx) => {
                let label = itemNode.textContent.trim();
                if (label.length > 45) label = label.substring(0, 42) + '...';
                
                const isHidden = itemNode.style.display === 'none';
                rowsHtml += `
                    <div class="editor-entry-row ${isHidden ? 'muted' : ''}" data-entry-index="${itemIdx}" style="display: none;">
                        <span class="drag-dots">::</span>
                        <strong>${label || 'New Entry'}</strong>
                        <button type="button" aria-label="Toggle entry visibility">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        </button>
                    </div>
                `;
            });

            sectionCard.innerHTML = `
                <div class="editor-section-heading">
                    <div class="editor-section-title">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v16H4z"></path></svg>
                        <h3>${sec.titleText}</h3>
                    </div>
                    <button class="edit-heading-btn" type="button">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3"><path d="m16.5 3.5 4 4L7 21H3v-4L16.5 3.5z"></path></svg>
                        Edit Heading
                    </button>
                    <svg class="section-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m18 15-6-6-6 6"></path></svg>
                </div>
                ${rowsHtml}
                <div class="editor-entry-actions" style="display: none;">
                    <button class="editor-add-entry-btn" type="button"><span>+</span>Add Entry</button>
                    <button class="editor-delete-entry-btn" type="button" aria-label="Delete entry">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 6h18"></path><path d="M8 6V4h8v2"></path><path d="m19 6-1 14H6L5 6"></path></svg>
                    </button>
                </div>
            `;

            editorContentPanel.appendChild(sectionCard);
        });

        // 4. Create and append the "Add Section" button
        const addBtn = document.createElement('button');
        addBtn.className = 'editor-add-content-btn';
        addBtn.type = 'button';
        addBtn.innerHTML = `<span>+</span>Add Content Section`;
        addBtn.style.marginTop = '16px';
        editorContentPanel.appendChild(addBtn);
    }

    function clearEditorToolPanel() {
        editorToolPanel?.remove();
        editorToolPanel = null;
    }

    function createEditorToolPanel(title, subtitle) {
        clearEditorToolPanel();
        editorToolPanel = document.createElement('section');
        editorToolPanel.className = 'editor-tool-card';
        editorToolPanel.innerHTML = `
            <div class="editor-tool-card-head">
                <h3>${title}</h3>
                <p>${subtitle}</p>
            </div>
            <div class="editor-tool-card-body"></div>
        `;
        const profileCard = editorContentPanel?.querySelector('.editor-profile-card');
        if (profileCard) {
            profileCard.insertAdjacentElement('afterend', editorToolPanel);
        } else {
            editorContentPanel?.prepend(editorToolPanel);
        }
        return editorToolPanel.querySelector('.editor-tool-card-body');
    }

    function applyEditorFont(font) {
        const normalizedFont = font === 'mono' ? 'monospace' : font;
        modalCvCanvas.classList.remove('font-sans', 'font-serif', 'font-monospace');
        modalCvCanvas.classList.add(`font-${normalizedFont}`);

        modalFontPicker.querySelectorAll('.font-picker-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-font') === normalizedFont);
        });

        const label = modalFontPicker.querySelector(`.font-picker-btn[data-font="${normalizedFont}"] .font-name-label`)?.textContent || normalizedFont;
        showToast(`Typographic profile updated to: ${label}`);
        updateModalAtsScore(Math.min(modalAtsScore + 2, 100));
    }

    function showCustomizeControls() {
        setEditorSectionsVisible(false);
        const body = createEditorToolPanel('Customize', 'Change color palette and typography for the selected resume template.');
        const themeId = activeModalShowcaseId || 'slate';
        const palettes = themePalettes[themeId] || themePalettes.slate;

        body.innerHTML = `
            <div class="editor-tool-group">
                <h4>Design Palettes</h4>
                <div class="editor-visible-palette"></div>
            </div>
            <div class="editor-tool-group">
                <h4>Typography</h4>
                <div class="editor-visible-fonts">
                    <button type="button" data-font="sans">Jakarta Sans</button>
                    <button type="button" data-font="serif">Georgia Serif</button>
                    <button type="button" data-font="monospace">Tech Monospace</button>
                </div>
            </div>
        `;

        const paletteWrap = body.querySelector('.editor-visible-palette');
        palettes.forEach((palette, idx) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = `editor-palette-btn ${idx === 0 ? 'active' : ''}`;
            button.style.backgroundColor = palette.primary;
            button.title = palette.name;
            button.addEventListener('click', () => {
                paletteWrap.querySelectorAll('.editor-palette-btn').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                applyPalette(themeId, palette);
                updateModalAtsScore(Math.min(modalAtsScore + 1, 100));
                showToast(`Theme color palette switched to "${palette.name}"`);
            });
            paletteWrap.appendChild(button);
        });

        body.querySelectorAll('.editor-visible-fonts button').forEach(button => {
            const font = button.getAttribute('data-font');
            button.classList.toggle('active', modalCvCanvas.classList.contains(`font-${font}`));
            button.addEventListener('click', () => {
                body.querySelectorAll('.editor-visible-fonts button').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                applyEditorFont(font);
            });
        });
    }

    function showAiToolsControls() {
        setEditorSectionsVisible(false);
        const body = createEditorToolPanel('AI Tools', 'Run resume optimization, save the current layout, and monitor ATS readiness.');
        body.innerHTML = `
            <div class="editor-tool-group">
                <button class="editor-tool-primary" type="button" data-action="ai-optimize">AI Optimize Resume</button>
                <button class="editor-tool-secondary" type="button" data-action="save-cloud">Save Resume to Cloud</button>
            </div>
            <div class="editor-ats-inline">
                <strong>${modalAtsScore || getModalBaseScore(activeModalShowcaseId)}%</strong>
                <span>${modalAtsStatusBadge.textContent || 'ATS readiness'}</span>
            </div>
        `;

        body.querySelector('[data-action="ai-optimize"]').addEventListener('click', () => modalAiOptimizeBtn.click());
        body.querySelector('[data-action="save-cloud"]').addEventListener('click', () => document.getElementById('modal-btn-save-cloud')?.click());
    }

    function showOverviewControls() {
        setEditorSectionsVisible(false);
        const body = createEditorToolPanel('Overview', 'Review the current template status and quick actions.');
        body.innerHTML = `
            <div class="editor-overview-row">
                <span>Selected template</span>
                <strong>${getActiveTemplateTitle()}</strong>
            </div>
            <div class="editor-overview-row">
                <span>ATS score</span>
                <strong>${modalAtsScore || getModalBaseScore(activeModalShowcaseId)}%</strong>
            </div>
            <div class="editor-tool-group">
                <button class="editor-tool-secondary" type="button" data-action="save-cloud">Save Resume to Cloud</button>
                <button class="editor-tool-primary" type="button" data-action="download">Download PDF</button>
            </div>
        `;

        body.querySelector('[data-action="save-cloud"]').addEventListener('click', () => document.getElementById('modal-btn-save-cloud')?.click());
        body.querySelector('[data-action="download"]').addEventListener('click', () => modalBtnDownload.click());
    }

    function showContentControls() {
        clearEditorToolPanel();
        buildEditorContentSidebar();
    }

    function setEditorTab(tabName) {
        editorTabButtons.forEach(button => {
            button.classList.toggle('active', button.textContent.trim().toLowerCase().includes(tabName));
        });

        if (tabName === 'overview') {
            showOverviewControls();
        } else if (tabName === 'customize') {
            showCustomizeControls();
        } else if (tabName === 'ai') {
            showAiToolsControls();
        } else {
            showContentControls();
        }
    }

    function ensureEditorSectionBody(card) {
        // Body is fully generated dynamically during buildEditorContentSidebar
    }

    function toggleEditorSection(card) {
        if (!card) return;
        const isExpanded = card.classList.contains('expanded');
        if (isExpanded) {
            card.classList.remove('expanded');
            card.classList.add('collapsed');
            card.querySelectorAll('.editor-entry-row, .editor-entry-actions').forEach(el => {
                el.style.display = 'none';
            });
        } else {
            card.classList.add('expanded');
            card.classList.remove('collapsed');
            card.querySelectorAll('.editor-entry-row, .editor-entry-actions').forEach(el => {
                el.style.display = '';
            });
        }
    }

    function addEditorEntry(card) {
        if (!card) return;
        const secIdx = card.dataset.sectionIndex;
        if (secIdx === undefined) return;
        
        const canvasSections = modalCvCanvas.querySelectorAll('.cv-section');
        const canvasSec = canvasSections[secIdx];
        if (!canvasSec) return;
        
        const list = canvasSec.querySelector('.cv-item-bullets, .cv-body') || canvasSec;
        const newItem = document.createElement('li');
        newItem.textContent = 'New bullet point entry';
        newItem.setAttribute('contenteditable', 'true');
        list.appendChild(newItem);
        
        buildEditorContentSidebar();
        const newCard = editorContentPanel.querySelector(`[data-section-index="${secIdx}"]`);
        if (newCard) {
            newCard.classList.remove('collapsed');
            newCard.classList.add('expanded');
            newCard.querySelectorAll('.editor-entry-row, .editor-entry-actions').forEach(el => {
                el.style.display = '';
            });
        }
        newItem.focus();
        showToast('Added a new bullet entry to the canvas.');
    }

    function deleteEditorEntry(card) {
        if (!card) return;
        const secIdx = card.dataset.sectionIndex;
        if (secIdx === undefined) return;
        
        const canvasSections = modalCvCanvas.querySelectorAll('.cv-section');
        const canvasSec = canvasSections[secIdx];
        if (!canvasSec) return;
        
        const items = canvasSec.querySelectorAll('.cv-item, .cv-item-role, .cv-section-p, .skill-tag, li');
        const lastItem = items[items.length - 1];
        if (lastItem) {
            lastItem.remove();
            
            buildEditorContentSidebar();
            const newCard = editorContentPanel.querySelector(`[data-section-index="${secIdx}"]`);
            if (newCard) {
                newCard.classList.remove('collapsed');
                newCard.classList.add('expanded');
                newCard.querySelectorAll('.editor-entry-row, .editor-entry-actions').forEach(el => {
                    el.style.display = '';
                });
            }
            showToast('Removed the last entry from the canvas.');
        }
    }

    function makeHeadingEditable(button) {
        const card = button.closest('.editor-section-card');
        const heading = card?.querySelector('.editor-section-title h3');
        if (!heading) return;

        heading.setAttribute('contenteditable', 'true');
        heading.focus();
        document.execCommand?.('selectAll', false, null);

        const finish = () => {
            heading.removeAttribute('contenteditable');
            const titleText = heading.textContent.trim() || 'Untitled';
            showToast(`Heading updated to "${titleText}".`);
            
            const secIdx = card.dataset.sectionIndex;
            if (secIdx !== undefined) {
                const canvasSections = modalCvCanvas.querySelectorAll('.cv-section');
                const canvasSec = canvasSections[secIdx];
                const canvasTitle = canvasSec?.querySelector('.cv-section-title');
                if (canvasTitle) {
                    canvasTitle.textContent = titleText.toUpperCase();
                }
            }
            heading.removeEventListener('blur', finish);
        };
        heading.addEventListener('blur', finish);
        heading.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                heading.blur();
            }
        }, { once: true });
    }

    function makeProfileEditable() {
        const nameNode = modalCvCanvas.querySelector('#cv-name-text') || modalCvCanvas.querySelector('.cv-name');
        if (nameNode) {
            nameNode.setAttribute('contenteditable', 'true');
            nameNode.focus();
            showToast('Profile name is now editable in the preview.');
        } else {
            showToast('Double-click any profile field directly in the canvas preview to edit.');
        }
    }

    function addEditorContentSection() {
        const cvBody = modalCvCanvas.querySelector('.cv-body') || modalCvCanvas;
        const newSec = document.createElement('div');
        newSec.className = 'cv-section';
        newSec.innerHTML = `
            <h3 class="cv-section-title" contenteditable="true">NEW SECTION</h3>
            <p class="cv-section-p" contenteditable="true">Add your details here.</p>
        `;
        cvBody.appendChild(newSec);
        
        buildEditorContentSidebar();
        const cards = editorContentPanel.querySelectorAll('.editor-section-card');
        if (cards.length > 0) {
            toggleEditorSection(cards[cards.length - 1]);
        }
        showToast('Added a new custom section to the canvas.');
    }

    function closeEditorMoreMenu() {
        editorMoreMenu?.remove();
        editorMoreMenu = null;
    }

    function toggleEditorMoreMenu() {
        if (editorMoreMenu) {
            closeEditorMoreMenu();
            return;
        }

        editorMoreMenu = document.createElement('div');
        editorMoreMenu.className = 'editor-more-menu';
        editorMoreMenu.innerHTML = `
            <button type="button" data-action="download">Download PDF</button>
            <button type="button" data-action="save">Save Resume</button>
            <button type="button" data-action="close">Close Editor</button>
        `;
        editorTopActions?.appendChild(editorMoreMenu);

        editorMoreMenu.addEventListener('click', (event) => {
            const action = event.target.closest('button')?.getAttribute('data-action');
            if (!action) return;
            closeEditorMoreMenu();

            if (action === 'download') {
                modalBtnDownload.click();
            } else if (action === 'save') {
                document.getElementById('modal-btn-save-cloud')?.click();
            } else {
                closeModal();
            }
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
                    const baseScore = getModalBaseScore(activeModalShowcaseId);
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
        card.addEventListener('click', (e) => {
            const showcaseId = card.getAttribute('data-showcase-id');

            // Special GitHub Contribution Card Override
            if (showcaseId === 'github-contribution') {
                e.preventDefault();
                e.stopPropagation();
                showToast("✨ Forking CVPilot repository on GitHub to add a new community template... 🚀");
                setTimeout(() => {
                    window.open("https://github.com/Shivam-Dhoundiyal/CVPilot", "_blank");
                }, 1200);
                return;
            }

            activeModalShowcaseId = showcaseId;
            modalIsAiOptimized = false;
            
            // Check if there is a cloud-saved resume for this template in the array
            const savedResume = window.userResumes ? window.userResumes.find(r => r.selectedTemplate === showcaseId) : null;
            
            if (savedResume && savedResume.canvasHtml) {
                // Restore customized canvas HTML
                modalCvCanvas.innerHTML = savedResume.canvasHtml;
                modalCvCanvas.style.backgroundColor = '';
                modalCvCanvas.className = "studio-interactive-cv-paper";
                
                // Re-enable contenteditable
                makeCanvasElementsEditable();
                
                // Restore font active picker state
                modalFontPicker.querySelectorAll('.font-picker-btn').forEach(btn => btn.classList.remove('active'));
                if (savedResume.canvasHtml.includes('font-serif')) {
                    modalFontPicker.querySelector('[data-font="serif"]').classList.add('active');
                    modalCvCanvas.classList.add('font-serif');
                } else if (savedResume.canvasHtml.includes('font-monospace') || savedResume.canvasHtml.includes('font-mono')) {
                    modalFontPicker.querySelector('[data-font="monospace"]')?.classList.add('active');
                    modalCvCanvas.classList.add('font-monospace');
                } else {
                    modalFontPicker.querySelector('[data-font="sans"]').classList.add('active');
                    modalCvCanvas.classList.add('font-sans');
                }
                renderPaletteButtons(showcaseId);
                
                // Display Modal overlay
                studioModal.classList.add('active');
                document.body.style.overflow = 'hidden';
                setEditorTab('content');
                
                // Restore ATS score
                setTimeout(() => {
                    updateModalAtsScore(savedResume.atsScore || 92);
                }, 350);
                
                showToast(`☁️ Cloud Restore: Loaded your saved custom "${savedResume.resumeTitle}" layout.`);
            } else {
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
                if (showcaseId === 'minimalist' || showcaseId === 'saffron' || showcaseId === 'wayne' || showcaseId === 'rivera' || showcaseId === 'mercury-flow' || showcaseId === 'classic-serif-flow' || showcaseId === 'compact-serif-flow') {
                    modalFontPicker.querySelector('[data-font="serif"]').classList.add('active');
                    modalCvCanvas.classList.add('font-serif');
                } else {
                    modalFontPicker.querySelector('[data-font="sans"]').classList.add('active');
                    modalCvCanvas.classList.add('font-sans');
                }
                renderPaletteButtons(showcaseId);
                
                // Activate contenteditable tags
                makeCanvasElementsEditable();
                
                // Display Modal overlay
                studioModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Stop standard page scroll
                setEditorTab('content');
                
                // Initial score check animation
                let initialScore = getModalBaseScore(showcaseId);
                
                setTimeout(() => {
                    updateModalAtsScore(initialScore);
                }, 350);
                
                showToast(`✨ Opened Template Editor Studio: "${card.querySelector('.showcase-title').textContent}" layout loaded.`);
            }
        });
    });

    // Close Modal triggers
    const closeModal = () => {
        closeEditorMoreMenu();
        studioModal.classList.remove('active');
        document.body.style.overflow = '';
        showToast("💼 Template customizer studio closed. Progress cached.");
    };
    
    closeStudioBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleEditorMoreMenu();
    });
    
    studioModal.addEventListener('click', (e) => {
        if (e.target === studioModal) {
            closeModal();
        }
    });

    document.addEventListener('click', (event) => {
        if (editorMoreMenu && !event.target.closest('.editor-top-actions')) {
            closeEditorMoreMenu();
        }
    });

    editorTabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const label = button.textContent.trim().toLowerCase();
            if (label.includes('overview')) {
                setEditorTab('overview');
            } else if (label.includes('customize')) {
                setEditorTab('customize');
            } else if (label.includes('ai')) {
                setEditorTab('ai');
            } else {
                setEditorTab('content');
            }
        });
    });

    editorContentPanel?.addEventListener('click', (event) => {
        const profileEditBtn = event.target.closest('.profile-edit-btn');
        if (profileEditBtn) {
            event.stopPropagation();
            makeProfileEditable();
            return;
        }

        const addContentBtn = event.target.closest('.editor-add-content-btn');
        if (addContentBtn) {
            event.stopPropagation();
            addEditorContentSection();
            return;
        }

        const editHeadingButton = event.target.closest('.edit-heading-btn');
        if (editHeadingButton) {
            event.stopPropagation();
            makeHeadingEditable(editHeadingButton);
            return;
        }

        const addEntryButton = event.target.closest('.editor-add-entry-btn');
        if (addEntryButton) {
            event.stopPropagation();
            addEditorEntry(addEntryButton.closest('.editor-section-card'));
            return;
        }

        const deleteEntryButton = event.target.closest('.editor-delete-entry-btn');
        if (deleteEntryButton) {
            event.stopPropagation();
            deleteEditorEntry(deleteEntryButton.closest('.editor-section-card'));
            return;
        }

        const previewButton = event.target.closest('.editor-entry-row button');
        if (previewButton) {
            event.stopPropagation();
            const row = previewButton.closest('.editor-entry-row');
            if (!row) return;
            
            const card = row.closest('.editor-section-card');
            const secIdx = card?.dataset.sectionIndex;
            const entryIdx = row.dataset.entryIndex;
            
            if (secIdx !== undefined && entryIdx !== undefined) {
                const canvasSections = modalCvCanvas.querySelectorAll('.cv-section');
                const canvasSec = canvasSections[secIdx];
                const items = canvasSec?.querySelectorAll('.cv-item, .cv-item-role, .cv-section-p, .skill-tag, li');
                const targetItem = items?.[entryIdx];
                
                if (targetItem) {
                    const isHidden = targetItem.style.display === 'none';
                    targetItem.style.display = isHidden ? '' : 'none';
                    row.classList.toggle('muted', !isHidden);
                    showToast(!isHidden ? 'Entry hidden from preview panel.' : 'Entry visible in preview panel.');
                }
            }
            return;
        }

        const heading = event.target.closest('.editor-section-heading');
        if (heading) {
            toggleEditorSection(heading.closest('.editor-section-card'));
        }
    });

    // Typography selector events
    const fontPickerBtns = modalFontPicker.querySelectorAll('.font-picker-btn');
    fontPickerBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            applyEditorFont(btn.getAttribute('data-font'));
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
        resetAuthSubmitButtons();
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

    function resetAuthSubmitButtons() {
        const loginSubmit = document.getElementById('btn-login-submit');
        const signupSubmit = document.getElementById('btn-signup-submit');

        if (loginSubmit) {
            loginSubmit.disabled = false;
            loginSubmit.innerHTML = 'Sign In to My Dashboard';
        }

        if (signupSubmit) {
            signupSubmit.disabled = false;
            signupSubmit.innerHTML = 'Create Free Workspace';
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

        // Dropdown actions: my resumes list
        const myResumesBtn = document.getElementById('btn-dropdown-my-resumes');
        if (myResumesBtn) {
            myResumesBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                badge.classList.remove('active');
                
                if (!window.userResumes || window.userResumes.length === 0) {
                    showToast("💼 Workspace Empty: You haven't saved any resumes to the cloud yet.");
                } else {
                    const listText = window.userResumes.map((r, i) => `${i + 1}. ${r.resumeTitle} (${r.selectedTemplate.toUpperCase()} - ATS Score: ${r.atsScore}%)`).join('\n');
                    alert(`💼 YOUR SAVED CLOUD RESUMES:\n\n${listText}\n\nSimply click the corresponding template card in the showcase grid to view or resume editing!`);
                }
            });
            // Update the count dynamically
            updateMyResumesCountUI();
        }
    }

    // Switch Header markup based on logged state
    function applyLoggedInHeader(name) {
        loggedInUser.name = name;
        isLoggedIn = true;
        
        // Save to browser persistence database safely without destroying fields
        const savedSession = localStorage.getItem('cvpilot_session');
        const existing = savedSession ? JSON.parse(savedSession) : {};
        localStorage.setItem('cvpilot_session', JSON.stringify({
            ...existing,
            uid: loggedInUser.uid || existing.uid || loggedInUser.email || existing.email || name,
            name: name,
            email: loggedInUser.email || existing.email || ""
        }));
        
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
                    <button class="dropdown-item-btn" type="button" id="btn-dropdown-my-resumes">
                        💼 My Resumes (0)
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

        // Dynamic cloud resumes sync
        if (typeof fetchUserResumes === 'function') {
            fetchUserResumes();
        }
    }

    // Switch Header markup back to guest
    function performLogout(silent = false, options = {}) {
        const shouldSignOutFirebase = !options.skipFirebase;
        isLoggedIn = false;
        loggedInUser = { name: "", email: "" };
        window.userResumes = []; // Clear resumes in memory
        
        // Clear local storage persistence
        localStorage.removeItem('cvpilot_session');
        
        // Sign out of Firebase Auth if active
        if (shouldSignOutFirebase && window.firebaseAuth) {
            window.firebaseAuth.signOut().then(() => {
                console.log("🔥 Firebase User session signed out successfully.");
            }).catch(err => {
                console.error("Firebase Sign-out error: ", err);
            });
        }
        
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
        
        if (!silent) {
            showToast("🚪 Successfully logged out of CVPilot workspace.");
        }
    }

    // Handle Login Submit
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;
        const btnSubmit = document.getElementById('btn-login-submit');
        
        btnSubmit.disabled = true;
        btnSubmit.innerHTML = `Validating Credentials...`;
        
        if (window.CVPilotFirebaseAuth && window.CVPilotFirebaseAuth.isConfigured) {
            window.CVPilotFirebaseAuth.signInWithEmail(email, password)
                .then(user => {
                    const nameToUse = user.displayName || email.split('@')[0];
                    authSuccessMessage.textContent = `Welcome back, ${nameToUse}! Provisioning personalized sandbox canvas...`;
                    authSuccessOverlay.classList.add('active');
                    
                    setTimeout(() => {
                        isLoggedIn = true;
                        loggedInUser = { name: nameToUse, email: email };
                        localStorage.setItem('cvpilot_session', JSON.stringify({ name: nameToUse, email: email, provider: 'Firebase' }));
                        applyLoggedInHeader(nameToUse);
                        closeAuthModal();
                        showToast(`✨ Welcome back, ${nameToUse}! Account unlocked successfully.`);
                    }, 1900);
                })
                .catch(error => {
                    console.error('Firebase sign-in error:', error);
                    let errMsg = error.message || 'Verification failed.';
                    if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
                        errMsg = 'Incorrect email or password. Please verify your credentials.';
                    } else if (error.code === 'auth/invalid-email') {
                        errMsg = 'Please enter a valid email address.';
                    } else if (error.code === 'auth/too-many-requests') {
                        errMsg = 'Too many failed attempts. Wait a moment and try again.';
                    } else if (error.code === 'auth/user-disabled') {
                        errMsg = 'This account has been disabled.';
                    } else if (error.code === 'auth/network-request-failed') {
                        errMsg = 'Network error. Check your connection and try again.';
                    }
                    showToast(`⚠️ Sign-in Failed: ${errMsg}`);
                    btnSubmit.disabled = false;
                    btnSubmit.innerHTML = `Sign In to My Dashboard`;
                });
        } else {
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
                        isLoggedIn = true;
                        loggedInUser = { name: nameToUse, email: email };
                        localStorage.setItem('cvpilot_session', JSON.stringify({ name: nameToUse, email: email, provider: 'Mock' }));
                        applyLoggedInHeader(nameToUse);
                        closeAuthModal();
                        showToast(`✨ Welcome back, ${nameToUse}! Account unlocked successfully.`);
                    }, 1900);
                    
                }, 600);
                
            }, 1000);
        }
    });

    // Handle Sign Up Submit
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('signup-name').value.trim();
        const email = document.getElementById('signup-email').value.trim();
        const password = document.getElementById('signup-password').value;
        const btnSubmit = document.getElementById('btn-signup-submit');
        const termsAccepted = document.getElementById('signup-terms').checked;
        
        if (!termsAccepted) {
            showToast("⚠️ You must agree to the Terms of Service.");
            return;
        }
        
        btnSubmit.disabled = true;
        btnSubmit.innerHTML = `Creating Secure Workspace...`;
        
        if (window.CVPilotFirebaseAuth && window.CVPilotFirebaseAuth.isConfigured) {
            window.CVPilotFirebaseAuth.signUpWithEmail(email, password, name)
                .then(user => {
                    authSuccessMessage.textContent = `Welcome, ${name}! Your Premium Sandbox Workspace has been successfully activated.`;
                    authSuccessOverlay.classList.add('active');
                    
                    setTimeout(() => {
                        isLoggedIn = true;
                        loggedInUser = { name: name, email: email };
                        localStorage.setItem('cvpilot_session', JSON.stringify({ name: name, email: email, provider: 'Firebase' }));
                        applyLoggedInHeader(name);
                        closeAuthModal();
                        showToast(`🏆 Welcome to CVPilot, ${name}! Premium templates are fully unlocked.`);
                        
                        setTimeout(() => {
                            showToast(`✉️ Welcome Dispatch: A welcoming setup guide has been sent to your inbox at ${email}!`);
                        }, 2800);
                    }, 1900);
                })
                .catch(error => {
                    console.error('Firebase sign-up error:', error);
                    let errMsg = error.message || 'Registration failed.';
                    if (error.code === 'auth/email-already-in-use') {
                        errMsg = 'This email address is already registered. Please log in instead.';
                    } else if (error.code === 'auth/weak-password') {
                        errMsg = 'Password is too weak. It must be at least 6 characters.';
                    } else if (error.code === 'auth/invalid-email') {
                        errMsg = 'Please enter a valid email address.';
                    } else if (error.code === 'auth/operation-not-allowed') {
                        errMsg = 'Email/password sign-up is not enabled in Firebase Authentication.';
                    } else if (error.code === 'auth/network-request-failed') {
                        errMsg = 'Network error. Check your connection and try again.';
                    }
                    showToast(`⚠️ Sign-up Failed: ${errMsg}`);
                    btnSubmit.disabled = false;
                    btnSubmit.innerHTML = `Create Free Workspace`;
                });
        } else {
            // Simulated mock fallback
            setTimeout(() => {
                btnSubmit.innerHTML = `Caching templates...`;
                
                setTimeout(() => {
                    // Show celebration overlay screen
                    authSuccessMessage.textContent = `Welcome, ${name}! Your Premium Sandbox Workspace has been successfully activated.`;
                    authSuccessOverlay.classList.add('active');
                    
                    setTimeout(() => {
                        isLoggedIn = true;
                        loggedInUser = { name: name, email: email };
                        localStorage.setItem('cvpilot_session', JSON.stringify({ name: name, email: email, provider: 'Mock' }));
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
        }
    });

    // =============================================================
    // AI RESHAPER PIPELINE INTERACTION (Core SaaS USP)
    // =============================================================
    
    const dragDropZone = document.getElementById('drag-drop-zone');
    const fileUploaderInput = document.getElementById('file-uploader-input');
    const btnBrowseFiles = document.getElementById('btn-browse-files');
    const uploadDetailsPanel = document.getElementById('upload-details-panel');
    const uploadedFilename = document.getElementById('uploaded-filename');
    const uploadedFilesize = document.getElementById('uploaded-filesize');
    const btnRemoveUploaded = document.getElementById('btn-remove-uploaded');
    const btnTriggerReshape = document.getElementById('btn-trigger-reshape');
    
    const reshaperModal = document.getElementById('reshaper-modal');
    const closeReshaperModal = document.getElementById('close-reshaper-modal');
    const parsedRawCvEditor = document.getElementById('parsed-raw-cv-editor');
    const resumeIntentInput = document.getElementById('resume-intent-input');
    const resumeIntentSummary = document.getElementById('resume-intent-summary');
    const reshaperProcessingLoader = document.getElementById('reshaper-processing-loader');
    const reshaperProgressBarFill = document.getElementById('reshaper-progress-bar-fill');
    const reshaperLoaderSteps = document.getElementById('reshaper-loader-steps');
    const reshaperStepBadge = document.getElementById('reshaper-step-badge');
    const reshaperCvCanvas = document.getElementById('reshaper-cv-canvas');
    const reshaperTemplateSelector = document.getElementById('reshaper-template-selector');
    const btnReshaperEdit = document.getElementById('btn-reshaper-edit');
    const btnReshaperBack = document.getElementById('btn-reshaper-back');
    const btnReshaperDownload = document.getElementById('btn-reshaper-download');

    const boringResumeContent = `JAMES ANDERSON
james.a@email.com | +1 555 123-4567 | New York, NY

OBJECTIVE
Looking for a challenging position in a growing company where I can use my skills.

EXPERIENCE
Marketing Manager - Growth Corp (2018 - 2021)
* Helped with marketing stuff.
* Made some social media posts on Facebook and Instagram.
* Talked to customers and worked with team members.
* Managed a small budget.

Marketing Assistant - Tech Solutions (2021 - Present)
* Worked on search engine optimization and online keywords.
* Did email campaigns and analytics dashboards.
* Answered emails and did data entry.

EDUCATION
Bachelor of Business Administration - New York University (2014 - 2018)

SKILLS
Microsoft Office, Communication, Teamwork, Social Media, Google Docs`;

    let boringResumeContentParsed = boringResumeContent;
    let userResumeIntent = '';

    function getUserIntent() {
        const activeIntent = (resumeIntentInput?.value || userResumeIntent || '').trim();
        return activeIntent || 'Rewrite the resume for a strong ATS-friendly career profile with measurable results and recruiter-focused keywords.';
    }

    function buildAiResumePrompt(rawText, intent) {
        const targetIntent = intent || getUserIntent();
        return `You are an expert AI resume writer. The user wants the resume rewritten according to this intent:\n"${targetIntent}"\n\nUse only the provided resume text. Preserve accuracy and do not invent companies, dates, or education. Rewrite the resume into a plain ATS-friendly format with headings, clean bullet points, strong action verbs, and keywords that match the target role. If information is missing, keep it honest and ask the user to confirm details.\n\nSource resume:\n${rawText}`;
    }

    function extractTargetRoleFromIntent(intent) {
        if (!intent) return 'Professional';
        const normalized = intent.toLowerCase();
        const roles = ['product manager', 'marketing manager', 'engineer', 'software engineer', 'data analyst', 'project manager', 'sales manager', 'business analyst', 'designer', 'operations manager', 'customer success', 'consultant', 'director', 'analyst', 'specialist'];
        for (const role of roles) {
            if (normalized.includes(role)) return role.charAt(0).toUpperCase() + role.slice(1);
        }
        const match = normalized.match(/\b(senior|lead|head|principal|associate|junior)\b/);
        return match ? `${match[0].charAt(0).toUpperCase() + match[0].slice(1)} Professional` : 'Professional';
    }

    function extractIndustryFromIntent(intent) {
        if (!intent) return 'general business';
        const normalized = intent.toLowerCase();
        const industries = ['fintech', 'healthcare', 'technology', 'education', 'ecommerce', 'saas', 'finance', 'manufacturing', 'energy', 'consumer', 'retail'];
        for (const industry of industries) {
            if (normalized.includes(industry)) return industry;
        }
        return 'business';
    }

    function generateExperienceHighlights(targetRole, industry, count) {
        const roleLabel = targetRole.includes('manager') ? targetRole : `${targetRole}`;
        const industryPhrase = industry === 'business' ? 'cross-functional teams' : `${industry} stakeholders`;
        const bullets = [
            `Led cross-functional teams and delivered measurable outcomes for ${industryPhrase}, strengthening operational efficiency and audience growth.`,
            `Optimized process execution across priority initiatives and improved key performance metrics by 20% or more.`,
            `Translated complex objectives into clear operational plans and drove progress with data-backed decisions.`,
            `Built and sustained stakeholder alignment while delivering high-quality work within tight timelines.`
        ];
        const secondaryBullets = [
            `Executed targeted programs that improved customer engagement and revenue reach.`,
            `Introduced scalable workflows for higher productivity and better reporting.`,
            `Partnered with marketing, product, and analytics teams to increase campaign performance and conversion.`,
            `Designed recommendations to reduce friction and accelerate execution.`
        ];
        return count === 1 ? [bullets.slice(0, 3)] : [bullets.slice(0, 3), secondaryBullets.slice(0, 3)];
    }

    function stripIntentFromText(text) {
        return text.replace(/^Intent:[\s\S]*?\n\n/, '').trim();
    }

    function simulateAiRewrite(rawText, intent) {
        const cleanedText = stripIntentFromText(rawText || '');
        const targetRole = extractTargetRoleFromIntent(intent);
        const industry = extractIndustryFromIntent(intent);
        const rawSummary = optimizeTextClientSide(cleanedText);
        const summary = `✦ AI REFLECTED: ${targetRole} with a strong focus on ${industry} results, strategic execution, and ATS-ready leadership. Proven ability to deliver measurable impact through cross-functional collaboration, data-backed planning, and high-impact execution.`;

        const skills = [
            targetRole.includes('marketing') ? 'Marketing Strategy' : 'Strategic Planning',
            industry === 'fintech' ? 'Fintech Optimization' : 'Stakeholder Collaboration',
            'Process Improvement',
            'Performance Metrics',
            'Cross-Functional Leadership',
            'Outcome-Driven Execution'
        ];

        const experienceBlocks = generateExperienceHighlights(targetRole, industry, 2);
        return {
            name: rawSummary.name,
            title: targetRole.toUpperCase(),
            email: rawSummary.email,
            phone: rawSummary.phone,
            location: rawSummary.location,
            summary,
            skills,
            experienceBlocks
        };
    }

    // Client-side NLP / Heuristics Optimization Engine
    function optimizeTextClientSide(text) {
        let name = "JAMES ANDERSON";
        let title = "MARKETING MANAGER";
        let email = "james.a@email.com";
        let phone = "+1 555 123-4567";
        let location = "New York, NY";
        let summary = aiOptimizedContent.summary;
        let skills = [...aiOptimizedContent.skills];

        const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
        if (lines.length > 0) {
            if (lines[0].length < 35 && !lines[0].includes('@') && !lines[0].includes('|')) {
                name = lines[0].toUpperCase();
            }
        }

        lines.forEach(line => {
            if (line.includes('@')) {
                const emailMatch = line.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
                if (emailMatch) email = emailMatch[0];
                
                const phoneMatch = line.match(/\+?\d[\d-\s()]{7,15}/);
                if (phoneMatch) phone = phoneMatch[0];
                
                const locationMatch = line.split('|').pop();
                if (locationMatch && locationMatch !== line) location = locationMatch.trim();
            }
        });

        const hasMarketing = text.toLowerCase().includes('marketing') || text.toLowerCase().includes('helped');
        const hasSocial = text.toLowerCase().includes('social') || text.toLowerCase().includes('facebook') || text.toLowerCase().includes('instagram');
        const hasBudget = text.toLowerCase().includes('budget') || text.toLowerCase().includes('money');
        const hasSeo = text.toLowerCase().includes('seo') || text.toLowerCase().includes('search') || text.toLowerCase().includes('keyword');
        const hasEmail = text.toLowerCase().includes('email') || text.toLowerCase().includes('campaign');

        let summaryP = `✦ AI RE-ENGINEERED: Highly accomplished professional with a proven track record of driving operational efficiency and strategic growth. Expert in translating complex objectives into streamlined execution pipelines, managing cross-functional initiatives, and delivering measurable ROI.`;

        if (hasMarketing) {
            summaryP = `✦ AI RE-ENGINEERED: Metrics-driven Marketing Professional with 5+ years of success leading high-impact acquisition campaigns, managing $500K+ program budgets, and supervising agile cross-functional teams. Proven ability to translate brand objectives into optimized execution funnels that scale traffic by 45% and drive lead conversion by 35%.`;
        }

        // Custom skills mapping
        let parsedSkills = [];
        if (hasSeo) parsedSkills.push("SEO Strategy");
        if (hasSocial) parsedSkills.push("Social Media ROI");
        if (hasBudget) parsedSkills.push("Budget Management");
        if (hasEmail) parsedSkills.push("Email Automation");
        
        if (parsedSkills.length > 0) {
            skills = [...parsedSkills, ...skills.slice(parsedSkills.length)];
        }

        return {
            name: name,
            title: title,
            email: email,
            phone: phone,
            location: location,
            summary: summaryP,
            skills: skills
        };
    }

    // Prevent default drag behaviors
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        if (dragDropZone) {
            dragDropZone.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
            }, false);
        }
    });

    // Add highlight on hover
    ['dragenter', 'dragover'].forEach(eventName => {
        if (dragDropZone) {
            dragDropZone.addEventListener(eventName, () => {
                dragDropZone.classList.add('dragover');
            }, false);
        }
    });

    ['dragleave', 'drop'].forEach(eventName => {
        if (dragDropZone) {
            dragDropZone.addEventListener(eventName, () => {
                dragDropZone.classList.remove('dragover');
            }, false);
        }
    });

    // Handle dropped files
    if (dragDropZone) {
        dragDropZone.addEventListener('drop', (e) => {
            const dt = e.dataTransfer;
            const files = dt.files;
            if (files.length > 0) {
                handleUploadedFile(files[0]);
            }
        });
    }

    // Browse files button click
    if (btnBrowseFiles && fileUploaderInput) {
        btnBrowseFiles.addEventListener('click', (e) => {
            e.preventDefault();
            fileUploaderInput.click();
        });
    }

    // File input changes
    if (fileUploaderInput) {
        fileUploaderInput.addEventListener('change', () => {
            if (fileUploaderInput.files.length > 0) {
                handleUploadedFile(fileUploaderInput.files[0]);
            }
        });
    }

    // User intent input updates
    if (resumeIntentInput) {
        resumeIntentInput.addEventListener('input', () => {
            userResumeIntent = resumeIntentInput.value.trim();
            if (resumeIntentSummary) {
                resumeIntentSummary.textContent = userResumeIntent || 'No intent entered yet. The AI will optimize the resume for a general ATS-friendly role.';
            }
        });
    }

    // Handle Uploaded File Details & States
    function handleUploadedFile(file) {
        const validExtensions = ['pdf', 'docx', 'doc', 'txt'];
        const fileExt = file.name.split('.').pop().toLowerCase();
        
        if (!validExtensions.includes(fileExt)) {
            showToast("⚠️ Invalid format! Please upload a PDF, DOCX, DOC, or TXT resume.");
            return;
        }

        const fileSizeKb = Math.round(file.size / 1024);
        if (fileSizeKb > 10240) {
            showToast("⚠️ File is too large! Maximum limit is 10MB.");
            return;
        }

        // If it's a plain text file, let's parse and read the content live!
        if (fileExt === 'txt') {
            const reader = new FileReader();
            reader.onload = function(e) {
                boringResumeContentParsed = e.target.result;
            };
            reader.readAsText(file);
        } else {
            boringResumeContentParsed = boringResumeContent;
        }

        // Display File details
        if (uploadedFilename && uploadedFilesize && uploadDetailsPanel && dragDropZone && btnTriggerReshape) {
            uploadedFilename.textContent = file.name;
            uploadedFilesize.textContent = `${fileSizeKb} KB • Ready for Reshape`;
            uploadDetailsPanel.classList.add('active');
            dragDropZone.style.display = 'none';
            btnTriggerReshape.classList.remove('disabled');
            showToast(`📄 Document "${file.name}" ready to analyze.`);
        }
    }

    // Remove Uploaded File action
    if (btnRemoveUploaded) {
        btnRemoveUploaded.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            resetFileUploader();
            showToast("🗑️ Uploaded document cleared.");
        });
    }

    function resetFileUploader() {
        if (fileUploaderInput && uploadDetailsPanel && dragDropZone && btnTriggerReshape) {
            fileUploaderInput.value = '';
            uploadDetailsPanel.classList.remove('active');
            dragDropZone.style.display = 'block';
            btnTriggerReshape.classList.add('disabled');
        }
    }

    // Launch AI Reshaper Workspace Modal
    if (btnTriggerReshape) {
        btnTriggerReshape.addEventListener('click', () => {
            if (btnTriggerReshape.classList.contains('disabled')) return;
            
            // Protected Action check: require login
            if (!isLoggedIn) {
                authModal.classList.add('active');
                switchAuthTab('tab-login');
                document.body.style.overflow = 'hidden';
                showToast("🔒 Protected Action: Please log in or sign up to run the AI Reshaper pipeline.");
                return;
            }
            
            // Activate Modal
            if (reshaperModal && parsedRawCvEditor) {
                reshaperModal.classList.add('active');
                document.body.style.overflow = 'hidden';
                const intentText = getUserIntent();
                if (resumeIntentSummary) {
                    resumeIntentSummary.textContent = intentText;
                }
                parsedRawCvEditor.textContent = `Intent: ${intentText}\n\n${boringResumeContentParsed}`;
                
                // Trigger compilation sequences
                startReshaperEngine();
            }
        });
    }

    // Processing Typewriter Simulation Engine
    function startReshaperEngine() {
        if (!reshaperProcessingLoader || !reshaperProgressBarFill || !reshaperLoaderSteps || !reshaperStepBadge) return;

        const intentText = getUserIntent();
        const aiPrompt = buildAiResumePrompt(boringResumeContentParsed, intentText);
        console.debug('AI generated prompt:', aiPrompt);

        reshaperProcessingLoader.style.display = 'flex';
        reshaperProgressBarFill.style.width = '0%';
        reshaperStepBadge.textContent = "Phase: Reflecting on user intent...";
        
        const diagnosticSteps = [
            { time: 0, text: "🔍 Dissecting raw plaintext sections & headers...", progress: 12 },
            { time: 1300, text: `📊 Scanning intent for \"${intentText}\" and recruiter signals...`, progress: 35 },
            { time: 2600, text: "✍️ Generating a strong ATS-friendly professional summary...", progress: 58 },
            { time: 3900, text: "🎯 Aligning keywords, metrics, and role-specific impact statements...", progress: 78 },
            { time: 5200, text: "✨ Formatting the resume into a clean, recruiter-ready layout...", progress: 92 },
            { time: 6500, text: "🎉 Compilation finished! Rendering premium matching preview...", progress: 100 }
        ];

        diagnosticSteps.forEach(step => {
            setTimeout(() => {
                reshaperLoaderSteps.textContent = step.text;
                reshaperProgressBarFill.style.width = `${step.progress}%`;
                
                if (step.progress === 100) {
                    setTimeout(() => {
                        reshaperProcessingLoader.style.display = 'none';
                        reshaperStepBadge.textContent = "Phase: AI Rewrite Ready";
                        showToast("🤖 AI Reshape Engine compiled a recruiter-grade portfolio!");
                        
                        // Populate and render beautiful canvas
                        syncAndRenderReshaperCV(reshaperTemplateSelector.value || "1");
                    }, 600);
                }
            }, step.time);
        });
    }

    // Core Canvas Synchronization & Render Cloner
    function syncAndRenderReshaperCV(templateId) {
        if (!reshaperCvCanvas || !parsedRawCvEditor) return;

        // Auto-select template on main layout workspace in background to sync elements
        const backgroundTplBtn = document.querySelector(`.template-grid-item[data-template="${templateId}"]`);
        if (backgroundTplBtn) {
            backgroundTplBtn.click();
        }

        // Small delay to allow main builder reordering routine to render styles
        setTimeout(() => {
            const originalMainCard = document.getElementById('main-cv-card');
            if (originalMainCard) {
                // Clear Reshaper target canvas
                reshaperCvCanvas.innerHTML = '';
                
                // Clone Main Card layout
                const clonedNode = originalMainCard.cloneNode(true);
                clonedNode.id = 'cloned-reshaper-cv-card';
                
                const intentText = getUserIntent();
                const rawText = stripIntentFromText(parsedRawCvEditor.textContent || parsedRawCvEditor.innerText);
                const aiOutput = simulateAiRewrite(rawText, intentText);

                // Apply dynamic metadata
                const nameEl = clonedNode.querySelector('#cv-name-text');
                if (nameEl) nameEl.textContent = aiOutput.name;
                
                const titleEl = clonedNode.querySelector('#cv-title-text');
                if (titleEl) titleEl.textContent = aiOutput.title;

                // Update specific parsed components inside the clone with elite rewrite content
                const summaryP = clonedNode.querySelector('.cv-section-p');
                if (summaryP) {
                    summaryP.textContent = aiOutput.summary;
                }
                
                const skillsContainer = clonedNode.querySelector('#cv-skills-badges');
                if (skillsContainer) {
                    skillsContainer.innerHTML = '';
                    aiOutput.skills.forEach(skill => {
                        const span = document.createElement('span');
                        span.className = 'skill-tag';
                        span.textContent = skill;
                        skillsContainer.appendChild(span);
                    });
                }

                const experienceLists = clonedNode.querySelectorAll('.cv-item-bullets');
                experienceLists.forEach((list, index) => {
                    const experienceLines = aiOutput.experienceBlocks[index] || [];
                    list.innerHTML = '';
                    experienceLines.forEach(line => {
                        const li = document.createElement('li');
                        li.textContent = line;
                        list.appendChild(li);
                    });
                });

                // Append finalized CV into modal preview canvas
                reshaperCvCanvas.appendChild(clonedNode);
                reshaperCvCanvas.className = `cv-card template-${templateId}`;
            }
        }, 300);
    }

    // Live listen for edits inside the Boring draft raw editor panel to auto-reshape!
    if (parsedRawCvEditor) {
        parsedRawCvEditor.addEventListener('input', () => {
            syncAndRenderReshaperCV(reshaperTemplateSelector.value || "1");
        });
    }

    // Modal select template swap handler
    if (reshaperTemplateSelector) {
        reshaperTemplateSelector.addEventListener('change', () => {
            syncAndRenderReshaperCV(reshaperTemplateSelector.value);
        });
    }

    // Toggle live contenteditable edits inside Reshaper CV
    let canvasEditActive = false;
    if (btnReshaperEdit) {
        btnReshaperEdit.addEventListener('click', (e) => {
            e.preventDefault();
            canvasEditActive = !canvasEditActive;
            const clonedCard = document.getElementById('cloned-reshaper-cv-card');
            
            if (clonedCard) {
                clonedCard.querySelectorAll('[contenteditable]').forEach(el => {
                    el.setAttribute('contenteditable', canvasEditActive ? 'true' : 'false');
                    if (canvasEditActive) {
                        el.style.outline = '1.5px dashed var(--primary-blue)';
                        el.style.background = 'rgba(37, 99, 235, 0.03)';
                    } else {
                        el.style.outline = 'none';
                        el.style.background = 'transparent';
                    }
                });
                btnReshaperEdit.innerHTML = canvasEditActive ? '✨ Lock & Save' : '🔧 Toggle Edit mode';
                showToast(canvasEditActive ? "🔧 Interactive canvas modifications enabled." : "🔒 Changes locked into CVPilot builder.");
            }
        });
    }

    // Close buttons handlers
    if (closeReshaperModal) {
        closeReshaperModal.addEventListener('click', () => {
            closeReshaperWorkspace();
        });
    }

    if (btnReshaperBack) {
        btnReshaperBack.addEventListener('click', () => {
            closeReshaperWorkspace();
        });
    }

    function closeReshaperWorkspace() {
        if (reshaperModal) {
            reshaperModal.classList.remove('active');
            document.body.style.overflow = '';
            resetFileUploader();
        }
    }

    // Simulated high-fidelity recruiter PDF compiler
    if (btnReshaperDownload) {
        btnReshaperDownload.addEventListener('click', () => {
            btnReshaperDownload.disabled = true;
            btnReshaperDownload.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:16px;height:16px;margin-right:8px;animation:spin 1s infinite linear;display:inline-block;"><circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.2)"></circle><path d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4z" fill="currentColor"></path></svg>
                Compiling Recruiter Package...
            `;
            
            setTimeout(() => {
                btnReshaperDownload.disabled = false;
                btnReshaperDownload.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:16px;height:16px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Export & Download PDF
                `;
                showToast("📥 Success! Your AI-reshaped, ATS-optimized CV package downloaded.");
                closeReshaperWorkspace();
            }, 2200);
        });
    }

    // Restore previous workspace state on refresh/load
    function checkExistingSession() {
        const savedSession = localStorage.getItem('cvpilot_session');
        if (savedSession) {
            try {
                const sessionData = JSON.parse(savedSession);
                isLoggedIn = true;
                loggedInUser = {
                    uid: sessionData.uid || sessionData.email || "",
                    name: sessionData.name,
                    email: sessionData.email || ""
                };
                applyLoggedInHeader(sessionData.name);
                showToast(`✨ Welcome back, ${sessionData.name}! Workspace session auto-restored.`);
                
                // Fetch resumes on boot session restorer
                fetchUserResumes();
            } catch (err) {
                localStorage.removeItem('cvpilot_session');
            }
        }
    }
    
    // Expose helpers globally for module-based authentication access
    window.applyLoggedInHeader = applyLoggedInHeader;
    window.showToast = showToast;
    window.performLogout = performLogout;
    
    // Run auto-login restoration scan
    checkExistingSession();

    // -------------------------------------------------------------
    // NEW: HIGH-FIDELITY SHOWCASE SEARCH & FILTERING SYSTEM
    // -------------------------------------------------------------
    const searchInput = document.getElementById('showcase-search-input');
    const clearSearchBtn = document.getElementById('clear-search-btn');
    const filterTabs = document.querySelectorAll('#showcase-filter-tabs .filter-tab');
    const showcaseItems = document.querySelectorAll('#showcase-templates-grid .showcase-item');

    let currentFilter = 'all';
    let searchQuery = '';

    const filterTemplates = () => {
        showcaseItems.forEach(item => {
            const categories = JSON.parse(item.getAttribute('data-categories') || '[]');
            
            // Check if matches selected tab category
            const matchesCategory = currentFilter === 'all' || categories.includes(currentFilter);
            
            // Search text content matches
            const titleText = (item.querySelector('.showcase-title')?.textContent || '').toLowerCase();
            const tagText = (item.querySelector('.showcase-tag')?.textContent || '').toLowerCase();
            const cvName = (item.querySelector('.mini-cv-name')?.textContent || '').toLowerCase();
            const cvTitle = (item.querySelector('.mini-cv-title')?.textContent || '').toLowerCase();
            
            // Collect tags text
            const skillTags = Array.from(item.querySelectorAll('.mini-cv-tag'))
                .map(t => t.textContent.toLowerCase())
                .join(' ');
            
            const itemText = `${titleText} ${tagText} ${cvName} ${cvTitle} ${skillTags}`;
            const matchesSearch = searchQuery === '' || itemText.includes(searchQuery);

            if (matchesCategory && matchesSearch) {
                item.classList.remove('hidden-card');
            } else {
                item.classList.add('hidden-card');
            }
        });
    };

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            
            // Toggle clear button visibility
            if (searchQuery.length > 0) {
                clearSearchBtn.style.display = 'flex';
            } else {
                clearSearchBtn.style.display = 'none';
            }
            
            filterTemplates();
        });
    }

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            searchQuery = '';
            clearSearchBtn.style.display = 'none';
            filterTemplates();
            searchInput.focus();
            showToast("🔍 Cleared template search filters.");
        });
    }

    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            currentFilter = tab.getAttribute('data-filter');
            filterTemplates();
            
            showToast(`📂 Showing templates filtered by: "${tab.textContent}"`);
        });
    });

    // -------------------------------------------------------------
    // CLOUD DATABASE INTEGRATION: SAVE, LOAD, AND CACHE RESUMES
    // -------------------------------------------------------------
    window.userResumes = [];

    function fetchUserResumes() {
        if (!isLoggedIn || !loggedInUser) return;
        const userId = loggedInUser.uid || loggedInUser.email;
        
        if (window.CVPilotFirebaseDB && window.CVPilotFirebaseDB.isConfigured) {
            window.CVPilotFirebaseDB.getUserResumes(userId)
                .then(resumes => {
                    window.userResumes = resumes;
                    updateMyResumesCountUI();
                    console.log("💼 Firebase Firestore Resumes Synced:", resumes.length);
                })
                .catch(err => {
                    console.error("Firebase Firestore Resume Load Error:", err);
                    showToast("⚠️ Cloud Sync Error: Unable to fetch your resumes from Firestore.");
                });
        } else {
            // Simulated local storage fallback
            try {
                const localStore = localStorage.getItem('cvpilot_cloud_resumes');
                if (localStore) {
                    const allResumes = JSON.parse(localStore);
                    window.userResumes = allResumes.filter(r => r.ownerId === userId);
                } else {
                    window.userResumes = [];
                }
                updateMyResumesCountUI();
                console.log("💼 Mock Local Storage Resumes Synced:", window.userResumes.length);
            } catch (err) {
                console.error("Local storage mock sync error:", err);
            }
        }
    }

    function updateMyResumesCountUI() {
        const btnMyResumes = document.getElementById('btn-dropdown-my-resumes');
        if (btnMyResumes) {
            btnMyResumes.innerHTML = `💼 My Resumes (${window.userResumes.length})`;
        }
    }

    // Bind Cloud Save Button Click Listener
    const saveCloudBtn = document.getElementById('modal-btn-save-cloud');
    if (saveCloudBtn) {
        saveCloudBtn.addEventListener('click', () => {
            if (!isLoggedIn || !loggedInUser) {
                authModal.classList.add('active');
                switchAuthTab('tab-login');
                document.body.style.overflow = 'hidden';
                showToast("🔒 Protected Action: Please log in or sign up to save your resume to the cloud.");
                return;
            }
            
            saveCloudBtn.disabled = true;
            const originalText = saveCloudBtn.innerHTML;
            saveCloudBtn.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width: 14px; height: 14px; margin-right: 8px; display: inline-block; vertical-align: -1.5px; animation: spin-loader 0.8s infinite linear;"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
                Syncing to Cloud...
            `;
            
            const nameNode = modalCvCanvas.querySelector('.mini-cv-name');
            const titleNode = modalCvCanvas.querySelector('.mini-cv-title');
            const summaryNode = modalCvCanvas.querySelector('.mini-cv-summary') || modalCvCanvas.querySelector('p');
            
            const nameText = nameNode ? nameNode.textContent.trim() : "James Anderson";
            const titleText = titleNode ? titleNode.textContent.trim() : "Marketing Manager";
            const summaryText = summaryNode ? summaryNode.textContent.trim() : "";
            
            const userId = loggedInUser.uid || loggedInUser.email;
            const resumeId = `${userId}_${activeModalShowcaseId}`;
            const resumeTitle = `${nameText}'s Custom ${activeModalShowcaseId.charAt(0).toUpperCase() + activeModalShowcaseId.slice(1)} CV`;
            
            // Extract core details for model layout compatibility
            const educationList = Array.from(modalCvCanvas.querySelectorAll('.mini-cv-education, .education-item')).map(e => e.textContent.trim());
            const experienceList = Array.from(modalCvCanvas.querySelectorAll('.mini-cv-experience, .experience-item')).map(e => e.textContent.trim());
            const skillTags = Array.from(modalCvCanvas.querySelectorAll('.mini-cv-tag')).map(t => t.textContent.trim());
            const projectList = Array.from(modalCvCanvas.querySelectorAll('.mini-cv-project, .project-item')).map(p => p.textContent.trim());
            
            const resumeData = {
                ownerId: userId,
                resumeTitle: resumeTitle,
                selectedTemplate: activeModalShowcaseId,
                atsScore: modalAtsScore || 92,
                canvasHtml: modalCvCanvas.innerHTML,
                personalInfo: {
                    name: nameText,
                    title: titleText
                },
                summary: summaryText,
                education: educationList,
                experience: experienceList,
                skills: skillTags,
                projects: projectList,
                createdAt: new Date().toISOString()
            };
            
            if (window.CVPilotFirebaseDB && window.CVPilotFirebaseDB.isConfigured) {
                window.CVPilotFirebaseDB.saveResume(resumeId, resumeData)
                    .then(() => {
                        showToast(`💾 Cloud Success: "${resumeTitle}" securely saved to Firestore!`);
                        fetchUserResumes();
                    })
                    .catch(err => {
                        console.error("Firestore Resume Save Error:", err);
                        showToast("⚠️ Cloud Save Failed: Unable to synchronize with Firestore.");
                    })
                    .finally(() => {
                        saveCloudBtn.disabled = false;
                        saveCloudBtn.innerHTML = originalText;
                    });
            } else {
                // Simulated fallback save
                setTimeout(() => {
                    try {
                        const localStore = localStorage.getItem('cvpilot_cloud_resumes');
                        const allResumes = localStore ? JSON.parse(localStore) : [];
                        
                        const idx = allResumes.findIndex(r => r.id === resumeId || (r.ownerId === userId && r.selectedTemplate === activeModalShowcaseId));
                        if (idx >= 0) {
                            allResumes[idx] = { id: resumeId, ...resumeData, updatedAt: new Date().toISOString() };
                        } else {
                            allResumes.push({ id: resumeId, ...resumeData, updatedAt: new Date().toISOString() });
                        }
                        
                        localStorage.setItem('cvpilot_cloud_resumes', JSON.stringify(allResumes));
                        showToast(`💾 Local Storage Sync: "${resumeTitle}" saved to simulated cloud database!`);
                        fetchUserResumes();
                    } catch (err) {
                        console.error("Local Storage Save Error:", err);
                        showToast("⚠️ Save Failed: Local persistence failure.");
                    } finally {
                        saveCloudBtn.disabled = false;
                        saveCloudBtn.innerHTML = originalText;
                    }
                }, 1000);
            }
        });
    }

    // -------------------------------------------------------------
    // NEW: FIREBASE AUTHENTICATION UI INTERFACE BRIDGE
    // -------------------------------------------------------------
    window.CVPilotAuthUI = {
        showToast: (message) => {
            showToast(message);
        },
        renderSignedIn: (userData) => {
            isLoggedIn = true;
            loggedInUser = {
                uid: userData.uid || userData.email,
                name: userData.name,
                email: userData.email
            };
            if (userData.persistLocal) {
                localStorage.setItem('cvpilot_session', JSON.stringify({ uid: loggedInUser.uid, name: userData.name, email: userData.email, provider: userData.provider || 'Firebase' }));
            }
            applyLoggedInHeader(userData.name);
            closeAuthModal();
            showToast(`✨ Account Sync: Welcome back, ${userData.name}! Dashboard fully active.`);
            
            // Sync user saved resumes
            fetchUserResumes();
        },
        renderSignedOut: (options = {}) => {
            isLoggedIn = false;
            loggedInUser = { name: "", email: "" };
            window.userResumes = []; // clear cache
            localStorage.removeItem('cvpilot_session');
            performLogout(options.silent, { skipFirebase: options.skipFirebase });
        }
    };

    // Dispatch the ready event to let firebase-auth.js unblock wait promise
    window.dispatchEvent(new CustomEvent('cvpilot:auth-ui-ready'));
});

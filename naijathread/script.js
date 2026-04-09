// ==========================================
// 1. DATA & ICONS
// ==========================================
const ICONS = {
  star: `<svg width="14" height="14" viewBox="0 0 24 24" fill="#c9a84c" stroke="#c9a84c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  loc: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
  box: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
  clock: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
  phone: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
  wa: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`,
  chevron: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`
};

const Data = {
    state: {
        cart: [],
        favorites: new Set(),
        selectedTone: "",
        selectedTailor: null,
    },
    products: [],
    categories: [
        { id: "ankara", name: "Ankara", images: ["https://i.pinimg.com/1200x/be/cb/16/becb16aaca4dc4407f4409b76082e1b4.jpg", "https://i.pinimg.com/1200x/26/03/2e/26032e005d6bcf5642cfd3e1e6555ceb.jpg", "https://i.pinimg.com/736x/82/c8/2a/82c82a35b63490fb75ec9b11dde23cde.jpg", "https://i.pinimg.com/736x/57/11/74/571174638e9e7524b742782d0be775f3.jpg", "https://i.pinimg.com/736x/6f/3b/55/6f3b55b9da15f33e67203e1b05b5d188.jpg", "https://i.pinimg.com/1200x/f0/11/fc/f011fc4457552032af19eaf595596685.jpg", "https://i.pinimg.com/1200x/cf/b5/db/cfb5dbf27065f145bc38749ec9b54ec0.jpg", "https://i.pinimg.com/736x/43/5e/43/435e43bbfe871f9e9d67825b2a5debee.jpg", "https://i.pinimg.com/1200x/39/fc/fe/39fcfef05253121b12284a4037ad5d20.jpg", "https://i.pinimg.com/1200x/10/11/b0/1011b04e90efffe78d58348f498f6007.jpg", "https://i.pinimg.com/736x/42/c1/a0/42c1a03bf622f785d568f927aa39a4bf.jpg", "https://i.pinimg.com/736x/e7/dd/d4/e7ddd426f1d13c6a7b97852d195164f4.jpg"] },
        { id: "aso-oke", name: "Aso-Oke", images: ["https://i.pinimg.com/736x/18/c7/01/18c701093f17566470d3dadc3c52da2b.jpg", "https://i.pinimg.com/736x/78/24/15/7824151111ba07052f39853132c1367a.jpg", "https://i.pinimg.com/736x/19/67/b0/1967b0217ad39dc1de098d531841649b.jpg", "https://i.pinimg.com/1200x/23/e3/4d/23e34d3dad4fe36ec27de1696b725660.jpg", "https://i.pinimg.com/736x/81/c0/9b/81c09bcad815d95d0bf5ac1bae4a56d9.jpg", "https://i.pinimg.com/1200x/6c/ef/16/6cef161ad5320ce407c37d82a5649d30.jpg", "https://i.pinimg.com/736x/54/c1/29/54c12948b60fe286a0e74b7dee1fcef4.jpg", "https://i.pinimg.com/736x/49/1e/e1/491ee14b51e0ca4e3810bb1b114d98a9.jpg", "https://i.pinimg.com/1200x/5b/a6/dc/5ba6dc0df1e302b55cbd3a768770d466.jpg", "https://i.pinimg.com/1200x/79/05/4e/79054ed8e9dda9a25595bebebecc3b15.jpg", "https://i.pinimg.com/736x/d4/cc/54/d4cc54e5e1e4d789ef1f906448ffbb2f.jpg", "https://i.pinimg.com/736x/72/3f/c0/723fc043118355bca0cf98f41457f0d4.jpg"] },
        { id: "agbada", name: "Agbada", images: ["https://i.pinimg.com/1200x/30/3a/22/303a22cb683fb4ca22f7d345cd98f6fe.jpg", "https://i.pinimg.com/1200x/a9/62/60/a962607a6e3598032402a7212c2e31ef.jpg", "https://i.pinimg.com/736x/48/a7/0b/48a70b19a8dbc2a6a3b95b6ecfe568c8.jpg", "https://i.pinimg.com/736x/7c/ac/7b/7cac7bf05283aa1c5c331d922cad5cb3.jpg", "https://i.pinimg.com/736x/91/75/6a/91756aa988a13f3fef54fc1fbcc79399.jpg", "https://i.pinimg.com/736x/fb/20/90/fb20905a7c9f9a2b076a21af8e7a88ab.jpg", "https://i.pinimg.com/736x/ab/e1/62/abe162577fb2193a6b6534a36a19e88c.jpg", "https://i.pinimg.com/736x/9f/9f/9c/9f9f9cc8e9f14b8e4c88b3ad672fd20f.jpg", "https://i.pinimg.com/736x/e7/13/80/e71380d1183a7ca82bc606d55a5b80b8.jpg", "https://i.pinimg.com/736x/cd/15/7c/cd157c76bc16fd6318f2b6c70081e8be.jpg", "https://i.pinimg.com/736x/36/12/46/3612464281341608ce28a9bd564307d6.jpg", "https://i.pinimg.com/736x/ad/db/e4/addbe4eda82a157d28b12a2bd2c75ac2.jpg"] },
        { id: "kaftan", name: "Kaftan", images: ["https://i.pinimg.com/1200x/6e/21/3e/6e213e8b1bb96dc580e1336a8c956590.jpg", "https://i.pinimg.com/736x/52/48/b0/5248b06b79ccaff1e37688fbd6d2ff64.jpg", "https://i.pinimg.com/1200x/73/fd/f7/73fdf7c31153737a130775e98f29b812.jpg", "https://i.pinimg.com/736x/4a/43/1d/4a431d13782eadaaaaef3f6155c30bd5.jpg", "https://i.pinimg.com/736x/b7/d4/bc/b7d4bce291286b6b82c3c50130c7bff0.jpg", "https://i.pinimg.com/736x/9e/ff/be/9effbe2e70ee536310a58197aec2fc1b.jpg", "https://i.pinimg.com/736x/ba/e3/9f/bae39f70bbb8f23f293fc4ae1e69ad22.jpg", "https://i.pinimg.com/1200x/c8/7e/71/c87e7178630657c32eb14846b97cb430.jpg", "https://i.pinimg.com/736x/ab/6e/11/ab6e116045a1f176236b0c1ee23cb482.jpg", "https://i.pinimg.com/1200x/2c/84/e4/2c84e4efa2ea30180530a36e75bcfead.jpg", "https://i.pinimg.com/1200x/a2/23/fd/a223fd13eb166e0cfa628af3ac8afafa.jpg", "https://i.pinimg.com/736x/02/32/29/023229378ea5e59c4957390831652d19.jpg"] },
        { id: "senator", name: "Senator", images: ["https://i.pinimg.com/736x/5a/fa/2b/5afa2b46cb64aa77fa4be532c02377cf.jpg", "https://i.pinimg.com/736x/d8/7b/a6/d87ba6f61468f0fa7fb2bba9665966a4.jpg", "https://i.pinimg.com/736x/c8/1a/e7/c81ae75e1d0c3f2418d06c4783ab4eae.jpg", "https://i.pinimg.com/736x/5a/fa/2b/5afa2b46cb64aa77fa4be532c02377cf.jpg", "https://i.pinimg.com/736x/92/4a/0a/924a0a418ffef336c1d6204c285936fa.jpg", "https://i.pinimg.com/736x/a6/7a/c5/a67ac54daab1c369c2d82951295ed630.jpg", "https://i.pinimg.com/1200x/65/6e/d3/656ed3760479404cf8d02b5e0897f46b.jpg", "https://i.pinimg.com/736x/98/96/5c/98965cb624527bd9faf4c6f3d6ec462c.jpg", "https://i.pinimg.com/1200x/33/aa/30/33aa300e2f06ca8f9a92a7e98ed0e854.jpg", "https://i.pinimg.com/1200x/16/69/cc/1669cc332719dc4685a892541e96e363.jpg", "https://i.pinimg.com/1200x/68/61/d3/6861d31e5f64b3fb54f1943f5291f84b.jpg", "https://i.pinimg.com/1200x/45/3f/a8/453fa8910da69ec7d422625a1d229499.jpg"] }
    ],
    designers: [
        { name:"Sonia Uzele", loc:"Benin, Edo", spec:"Women's Wears", items:72, rating:5.0, img:"https://res.cloudinary.com/dwrcqtkjc/image/upload/v1775308963/sonia_fwymn4.jpg", story:"Excellence in Every Stitch" },
        { name:"KingsWear Lagos", loc:"Victoria Island, Lagos", spec:"Men's Agbada", items:28, rating:4.8, img:"https://images.unsplash.com/photo-1723221906960-1c5a5febc9c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmlnZXJpYW4lMjBmYXNoaW9uJTIwZGVzaWduZXJzfGVufDB8fDB8fHww", story:"Redefining the modern African gentleman." },
        { name:"Aso by Funke", loc:"Ibadan, Oyo", spec:"Bridal & Aso-Oke", items:35, rating:5.0, img:"https://plus.unsplash.com/premium_photo-1692873058825-d7ad4f33e85e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmlnZXJpYW4lMjBmYXNoaW9uJTIwZGVzaWduZXJzfGVufDB8fDB8fHww", story:"Weaving generations of joy into every bridal piece." },
        { name:"Northcraft Kano", loc:"Kano State", spec:"Northern Kaftan", items:61, rating:4.7, img:"https://images.unsplash.com/photo-1620932934121-64b011924f08?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5pZ2VyaWFuJTIwZmFzaGlvbiUyMGRlc2lnbmVyc3xlbnwwfHwwfHx8MA%3D%3D", story:"Authentic northern embroidery with a global touch." },
        { name:"Leke Threads", loc:"Port Harcourt, Rivers", spec:"Contemporary Fusion",items:19,rating:4.6, img:"https://media.istockphoto.com/id/1364617634/photo/tanzanian-woman-with-snake-print-turban-over-hear-working-in-fabrics-shop.webp?a=1&b=1&s=612x612&w=0&k=20&c=KX5ENtBPbrqfja-3U874sK7uuY9E5qHkxXOW_yAoxls=", story:"Where street style meets African heritage." },
        { name:"House of Emeka", loc:"Enugu State", spec:"Corporate & Events",items:33, rating:4.8, img:"https://plus.unsplash.com/premium_photo-1683121523671-9617aba661d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5pZ2VyaWFuJTIwbWFuJTIwb24lMjBzdWl0fGVufDB8fDB8fHww", story:"Tailored perfection for the boardroom and beyond." }
    ],
    tailors: [
        { name:"Mama Bisi", loc:"Surulere, Lagos", rate:8000, stars:4.9, reviews:142, spec:"Ankara & Lace", orders:310, onTime:"98%", phone:"08011112222", wa:"2348011112222", img:"https://media.istockphoto.com/id/1130715766/photo/tailor-with-tap-measure-sitting-by-sewing-machine.jpg?s=612x612&w=0&k=20&c=m_8Akt6osHtrN8t7jNNNf-tVbzShRk5HcV8WqrcklOA=", feedbacks:["Always delivers before the event. Her finishing is top notch!", "Best Ankara styles I've ever had made."] },
        { name:"Alhaji Garba", loc:"Wuse, Abuja", rate:10000, stars:4.7, reviews:89, spec:"Kaftan & Senator", orders:215, onTime:"95%", phone:"08022223333", wa:"2348022223333", img:"https://media.istockphoto.com/id/1263637777/photo/african-worker-in-a-small-tailor-shop.jpg?s=612x612&w=0&k=20&c=Gp0f_9UZnzb-rYX4mOP6MBJ-M08w0fz6aQw8Nqj3OsQ=", feedbacks:["My Agbada was perfect for the wedding.", "Great stitching, highly recommend."] },
        { name:"Chi-Chi Sewing", loc:"Aba, Abia State", rate:6500, stars:5.0, reviews:210, spec:"Bridal & Formal", orders:450, onTime:"99%", phone:"08033334444", wa:"2348033334444", img:"https://media.istockphoto.com/id/1421229699/photo/african-tailor-sewing-with-her-machine.jpg?s=612x612&w=0&k=20&c=basryroTJoSrONmlXP070ASamAkkFxd32k_DWMJb3cg=", feedbacks:["She made my wedding dress in 2 weeks!", "Amazing attention to detail."] },
        { name:"Tunde Atelier", loc:"Ikeja, Lagos", rate:12000, stars:4.8, reviews:120, spec:"Luxury & Agbada", orders:280, onTime:"96%", phone:"08044445555", wa:"2348044445555", img:"https://media.istockphoto.com/id/512332512/photo/a-tailor.jpg?s=612x612&w=0&k=20&c=xIKeGlWqzdKv6SM_IxqQdfTTBTkbqfqbHxRVFb4_8vY=", feedbacks:["Premium quality. Worth every naira.", "The embroidery is flawless."] },
        { name:"Bisi Couture House", loc:"Benin City, Edo", rate:7500, stars:4.6, reviews:75, spec:"Women's Fashion", orders:180, onTime:"92%", phone:"08055556666", wa:"2348055556666", img:"https://media.istockphoto.com/id/1421229719/photo/tailor-working-in-her-shop-with-a-sewing-machine.jpg?s=612x612&w=0&k=20&c=3Fu4wwtvs56D5H1Uk69Hm7SInm5sE5NrtdKtXtxz7yk=", feedbacks:["Lovely Aso-ebi styles.", "Very professional and polite."] }
    ],
    testimonials: [
        { text:"Found the most beautiful Ankara dress for my sister's wedding. The designer delivered in 5 days — quality was amazing!", name:"Chinonso A.", role:"Customer, Enugu", stars:"★★★★★", img:"https://i.pinimg.com/1200x/2b/be/af/2bbeaf6839e28d411354ac171140c5ef.jpg" },
        { text:"As a designer in Kano, NaijaThreads helped me reach customers in Lagos and Abuja. My sales tripled in 3 months.", name:"Alhaji Musa T.", role:"Designer, Kano", stars:"★★★★★", img:"https://i.pinimg.com/1200x/7a/f2/7b/7af27b28b533dc78033aba7411bd91ec.jpg" },
        { text:"The recommendation engine is a game changer. It picked styles that actually suit my pear shape — I was impressed!", name:"Tolani O.", role:"Customer, Lagos", stars:"★★★★★", img:"https://i.pinimg.com/1200x/51/ec/7b/51ec7b94b552951914e84bd421fbd13e.jpg" }
    ],
    names: {
        "ankara": ["Sunset Rhythm Ankara", "Royal Bloom Ankara", "Midnight Heritage Ankara", "Urban Pulse Ankara", "Golden Tribe Ankara", "Sapphire Flow Ankara", "Vibrant Crown Ankara", "Afro Luxe Ankara", "Tribal Whisper Ankara", "Festival Flame Ankara", "Regal Patch Ankara", "Queen’s Canvas Ankara"],
        "aso-oke": ["Prestige Weave Aso-Oke", "Royal Loom Aso-Oke", "Heritage Crown Aso-Oke", "Imperial Thread Aso-Oke", "Noble Roots Aso-Oke", "Kingsguard Aso-Oke", "Dynasty Weave Aso-Oke", "Golden Prestige Aso-Oke", "Oba’s Pride Aso-Oke", "Elite Heritage Aso-Oke", "Crownline Aso-Oke", "Timeless Monarch Aso-Oke"],
        "agbada": ["Obsidian King Agbada", "Royal Drip Agbada", "Heritage Flow Agbada", "Noble Giant Agbada", "Apex Monarch Agbada", "Prestige Lord Agbada", "Midnight Royal Agbada", "Imperial Swagger Agbada", "Crown Authority Agbada", "Elite Presence Agbada", "Grand Sultan Agbada", "Legacy King Agbada"],
        "kaftan": ["Desert Silk Kaftan", "Midnight Breeze Kaftan", "Royal Ease Kaftan", "Urban Sultan Kaftan", "Luxe Flow Kaftan", "Golden Aura Kaftan", "Prestige Comfort Kaftan", "Velvet Wind Kaftan", "Oasis Drip Kaftan", "Regal Soft Kaftan", "Monarch Lounge Kaftan", "Smooth Elite Kaftan"],
        "senator": ["Classic Edge Senator", "Prime Prestige Senator", "Urban Noble Senator", "Elite Cut Senator", "Signature Flow Senator", "Royal Minimal Senator", "Executive Drip Senator", "Prestige Line Senator", "Modern King Senator", "Sharp Authority Senator", "Apex Gentleman Senator", "Timeless Fit Senator"]
    },
    
generateProducts() {
        const customPrices = {
            "ankara": [16000, 18000, 17000, 16000, 14000, 20000, 19000, 28000, 20000, 25000, 19000, 20000],
            "aso-oke": [21000, 28000, 25000, 23000, 19000, 18000, 17000, 14000, 24000, 30000, 28000, 29000],
            "agbada": [45000, 47000, 50000, 56000, 72000, 81000, 83000, 98000, 67000, 115000, 120000, 124000],
            "kaftan": [38000, 64000, 30000, 49000, 40000, 35000, 37000, 33000, 28000, 65000, 40000, 32000],
            "senator": [49000, 55000, 42000, 49000, 63000, 76000, 40000, 48000, 52000, 75000, 65000, 65000]
        };

        let pId = 1;
        this.categories.forEach(c => {
            for(let i = 0; i < 12; i++) {
                const basePrice = customPrices[c.id] ? customPrices[c.id][i] : 15000 + (i * 2000);
                
                let price = basePrice;
                let oldPrice = null;

                // Apply a random discount between 5% and 10% to every 3rd item
                if (i % 3 === 0) {
                    const discountPercent = 5 + Math.floor(Math.random() * 6); // Random integer between 5 and 10
                    price = Math.floor(basePrice * (1 - (discountPercent / 100)));
                    oldPrice = basePrice;
                }

                const designerName = this.designers[i % this.designers.length].name;
                const productName = this.names[c.id] ? this.names[c.id][i] : `${c.name} Premium Style ${i + 1}`;
                
                let range = "mid";
                if(price < 10000) range = "low";
                else if(price <= 30000) range = "mid";
                else if(price <= 80000) range = "high";
                else range = "luxury";

                this.products.push({
                    id: pId++,
                    name: productName,
                    brand: designerName,
                    price: price,
                    oldPrice: oldPrice,
                    sizes: ["S", "M", "L", "XL"],
                    range: range,
                    img: c.images[i],
                    cat: c.id,
                    body: ["pear", "hourglass", "athletic", "rectangle"],
                    tone: ["fair", "medium", "tan", "deep", "rich"],
                    occ: ["casual", "traditional", "wedding", "corporate"],
                    gender: (c.id === "ankara" || c.id === "aso-oke") ? "women" : "men",
                    rating: 4.5 + (Math.random() * 0.5),
                    reviews: Math.floor(Math.random() * 200) + 10,
                    badge: i === 0 ? "Bestseller" : (i === 1 ? "New" : null),
                    fit_warnings: {
                        pear: c.id === "ankara" ? "The flared silhouette perfectly complements your proportions." : "This straight cut may be tight around the hips. Consider sizing up.",
                        rectangle: c.id === "aso-oke" ? "Adds beautiful structure and volume to a straight frame." : "Consider adding a belt to create waist definition.",
                        hourglass: "Highlights your natural curves beautifully.",
                        athletic: "Softens broad shoulders elegantly while maintaining structure.",
                        apple: "Draws attention upward, flattering your midsection."
                    }
                });
            }
        });
    }
};

// ==========================================
// 2. UTILITIES & CORE UI CONTROLLERS
// ==========================================
const UI = {
    toastId: 0,
    toastContainer: document.getElementById("toast-container"),
    
    showToast(title, msg, duration = 3500) {
        const id = ++this.toastId;
        const el = document.createElement("div");
        el.className = "toast";
        el.dataset.id = id;
        el.innerHTML = `<div class="toast-title">${title}</div><div class="toast-msg">${msg}</div>`;
        this.toastContainer.appendChild(el);
        
        requestAnimationFrame(() => el.classList.add("show"));
        setTimeout(() => {
            el.classList.remove("show");
            setTimeout(() => el.remove(), 400);
        }, duration);
    },

    // A unified modal manager to handle overlays cleanly
    Modal: {
        open(id) {
            const el = document.getElementById(id);
            if(el) {
                el.classList.add('open');
                document.body.style.overflow = 'hidden';
            }
        },
        close(id) {
            const el = document.getElementById(id);
            if(el) {
                el.classList.remove('open');
                document.body.style.overflow = '';
            }
        },
        resetForm(formId, successId) {
            setTimeout(() => {
                const form = document.getElementById(formId);
                const success = document.getElementById(successId);
                if(form) { form.style.display = "flex"; form.reset(); }
                if(success) success.style.display = "none";
            }, 300);
        }
    },

    // Handles element reveals on scroll
    Observer: {
        instance: null, // Keep track of the observer
        init() {
            // Only create the observer once
            if (!this.instance) {
                this.instance = new IntersectionObserver((entries) => {
                    entries.forEach(e => { 
                        if (e.isIntersecting) { 
                            e.target.classList.add("visible"); 
                            this.instance.unobserve(e.target); 
                        } 
                    });
                }, { threshold: 0.12 });
            }

            // Target only items that haven't been revealed yet
            document.querySelectorAll(".reveal:not(.visible), .reveal-left:not(.visible), .reveal-scale:not(.visible)").forEach(el => {
                this.instance.observe(el);
            });
        }
    }
};

// ==========================================
// 3. APPLICATION MODULES
// ==========================================

const Header = {
    init() {
        this.headerEl = document.getElementById("site-header");
        this.hamburger = document.getElementById("hamburger");
        this.mobileMenu = document.getElementById("mobileMenu");
        this.lastScrollY = window.scrollY;
        this.bindEvents();
    },
    bindEvents() {
        window.addEventListener("scroll", () => {
            const currentScrollY = window.scrollY;
            this.headerEl.classList.toggle("scrolled", currentScrollY > 40);

            if (currentScrollY > this.lastScrollY && currentScrollY > 150) {
                this.headerEl.classList.add("header-hidden");
            } else {
                this.headerEl.classList.remove("header-hidden");
            }
            this.lastScrollY = currentScrollY;
        }, { passive: true });

        this.hamburger.addEventListener("click", () => {
            const isOpen = this.hamburger.classList.toggle("open");
            this.mobileMenu.classList.toggle("open", isOpen);
            this.hamburger.setAttribute("aria-expanded", isOpen);
            this.mobileMenu.setAttribute("aria-hidden", !isOpen);
        });

        this.mobileMenu.querySelectorAll("a").forEach(a => {
            a.addEventListener("click", () => {
                this.hamburger.classList.remove("open");
                this.mobileMenu.classList.remove("open");
                this.hamburger.setAttribute("aria-expanded", "false");
                this.mobileMenu.setAttribute("aria-hidden", "true");
            });
        });
    }
};

const Cart = {
    init() {
        this.cartItemsEl = document.getElementById("cartItems");
        this.cartFooter = document.getElementById("cartFooter");
        this.cartTotalEl = document.getElementById("cartTotal");
        this.cartCountEl = document.getElementById("cartCount");
        this.updateUI();
        this.bindEvents();
    },
    updateUI() {
        const count = Data.state.cart.length;
        this.cartCountEl.textContent = count;
        this.cartCountEl.classList.toggle("visible", count > 0);

        if (count === 0) {
            this.cartItemsEl.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🛒</div><div class="cart-empty-text">Your cart is empty</div><p style="font-size:0.82rem;color:var(--ink-60)">Explore the collection to find your perfect piece.</p></div>`;
            this.cartFooter.style.display = "none";
            return;
        }

        this.cartFooter.style.display = "block";
        this.cartItemsEl.innerHTML = Data.state.cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-emoji" style="overflow:hidden;"><img src="${item.img}" style="width:100%; height:100%; object-fit:cover; border-radius:4px;" alt="${item.name}"></div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-brand">${item.brand}</div>
                    <div class="cart-item-price">₦${item.price.toLocaleString()}</div>
                </div>
                <button class="cart-item-remove" data-id="${item.id}" aria-label="Remove ${item.name}">✕</button>
            </div>
        `).join("");
        
        const total = Data.state.cart.reduce((sum, i) => sum + i.price, 0);
        this.cartTotalEl.textContent = `₦${total.toLocaleString()}`;
    },
    bindEvents() {
        document.getElementById("cartToggleBtn").addEventListener("click", () => UI.Modal.open("cartOverlay"));
        document.getElementById("cartCloseBtn").addEventListener("click", () => UI.Modal.close("cartOverlay"));
        document.getElementById("cartOverlay").addEventListener("click", e => { if (e.target.id === "cartOverlay") UI.Modal.close("cartOverlay"); });

        this.cartItemsEl.addEventListener("click", e => {
            const btn = e.target.closest(".cart-item-remove");
            if (!btn) return;
            const id = parseInt(btn.dataset.id);
            Data.state.cart = Data.state.cart.filter(i => i.id !== id);
            this.updateUI();
        });

        document.getElementById("checkoutBtn").addEventListener("click", () => {
            UI.showToast("Checkout Coming Soon!", "We're building our payment gateway — stay tuned 🚀");
        });
    }
};

const Products = {
    init() {
        this.grid = document.getElementById("productsGrid");
        this.render("all");
        this.bindEvents();
    },
    buildCard(p) {
        const priceHtml = p.oldPrice
            ? `<div class="product-price"><span class="price-old">₦${p.oldPrice.toLocaleString()}</span>₦${p.price.toLocaleString()}</div>`
            : `<div class="product-price">₦${p.price.toLocaleString()}</div>`;

        const badgeHtml = p.badge 
            ? `<div class="product-badge">${p.badge}</div>` 
            : (p.oldPrice ? `<div class="product-badge" style="background:var(--g700)">Sale</div>` : "");

        const isFav = Data.state.favorites.has(p.id);

        return `
            <article class="product-card reveal-scale visible" data-id="${p.id}">
                <div class="product-img">
                    ${badgeHtml}
                    <img src="${p.img}" alt="${p.name}" class="product-real-img" loading="lazy">
                    <div class="product-overlay" aria-hidden="true">
                        <button class="overlay-btn" data-action="cart" data-id="${p.id}">Add to Cart</button>
                        <button class="overlay-btn secondary tryon" data-action="tryon" data-id="${p.id}"> Try On</button>
                    </div>
                    <button class="fav-btn" data-id="${p.id}" aria-label="${isFav ? "Remove from" : "Add to"} wishlist">
                        ${isFav ? "❤️" : "🤍"}
                    </button>
                </div>
                <div class="product-info">
                    <div class="product-row">
                        <div>
                            <div class="product-name">${p.name}</div>
                            <div class="product-brand"><a href="#" class="designer-link" data-designer="${p.brand}">by ${p.brand}</a></div>
                        </div>
                        ${priceHtml}
                    </div>
                    <div class="product-sizes">Sizes: ${p.sizes.join(" / ")}</div>
                    <div class="product-rating" aria-label="Rated ${p.rating} out of 5">
                        ${"★".repeat(Math.floor(p.rating))}${"☆".repeat(5 - Math.floor(p.rating))}
                        <span>(${p.reviews})</span>
                    </div>
                </div>
            </article>
        `;
    },
    render(filter = "all") {
        if (filter === "all") {
            this.grid.className = 'shop-sections-container';
            let html = '';
            Data.categories.forEach(cat => {
                const catItems = Data.products.filter(p => p.cat === cat.id);
                html += `
                    <div class="shop-subsection">
                        <h3 class="subsection-title">${cat.name} Collection</h3>
                        <div class="products-carousel">
                            ${catItems.map(p => this.buildCard(p)).join("")}
                        </div>
                        <div class="view-more-wrap">
                            <button class="btn-view-more" data-target="${cat.id}">View More ${cat.name}</button>
                        </div>
                    </div>
                `;
            });
            this.grid.innerHTML = html;
        } else {
            this.grid.className = 'products-grid-3x4';
            const catItems = Data.products.filter(p => p.cat === filter);
            this.grid.innerHTML = `
                ${catItems.map(p => this.buildCard(p)).join("")}
                <div class="view-more-wrap full-width">
                    <button class="btn-view-more" onclick="UI.showToast('Loading', 'More items loading soon...')">View More Items</button>
                </div>
            `;
        }
        UI.Observer.init();
    },
    bindEvents() {
        // Strip Navigation
        document.getElementById("categoryStrip").addEventListener("click", e => {
            const btn = e.target.closest(".cat-btn");
            if (!btn) return;
            document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            this.render(btn.dataset.cat);
        });

        // Grid interactions
        this.grid.addEventListener("click", e => {
            const card = e.target.closest('.product-card');

            // Mobile Touch Reveal Logic
            if (window.matchMedia("(hover: none)").matches && card) {
                if (e.target.classList.contains('product-real-img')) {
                    document.querySelectorAll('.product-card.touch-active').forEach(c => {
                        if (c !== card) c.classList.remove('touch-active');
                    });
                    card.classList.toggle('touch-active');
                    e.preventDefault(); 
                    return;
                }
                if (!e.target.closest('.product-overlay')) {
                    document.querySelectorAll('.product-card.touch-active').forEach(c => c.classList.remove('touch-active'));
                }
            }

            const actionBtn = e.target.closest(".overlay-btn");
            const favBtn = e.target.closest(".fav-btn");
            const viewMoreBtn = e.target.closest(".btn-view-more");
            const designerLink = e.target.closest(".designer-link");

            if (designerLink) {
                e.preventDefault();
                Designers.openPopup(designerLink.dataset.designer);
                return;
            }

            if (viewMoreBtn && viewMoreBtn.dataset.target) {
                const targetBtn = document.querySelector(`.cat-btn[data-cat="${viewMoreBtn.dataset.target}"]`);
                if(targetBtn) targetBtn.click();
                document.getElementById("shop").scrollIntoView({ behavior: "smooth" });
                return;
            }

            if (actionBtn) {
                const id = parseInt(actionBtn.dataset.id);
                const product = Data.products.find(p => p.id === id);
                if (actionBtn.dataset.action === "cart") {
                    if (Data.state.cart.find(i => i.id === id)) {
                        UI.showToast("Already in Cart", `${product.name} is already in your cart.`);
                    } else {
                        Data.state.cart.push(product);
                        Cart.updateUI();
                        UI.showToast("Added to Cart 🛒", `${product.name} — ₦${product.price.toLocaleString()}`);
                    }
                } else if (actionBtn.dataset.action === "tryon") {
                    VFR.open(id);
                }
            }

            if (favBtn) {
                const id = parseInt(favBtn.dataset.id);
                const product = Data.products.find(p => p.id === id);
                if (Data.state.favorites.has(id)) {
                    Data.state.favorites.delete(id);
                    favBtn.textContent = "🤍";
                    UI.showToast("Removed", `${product.name} removed from wishlist`);
                } else {
                    Data.state.favorites.add(id);
                    favBtn.textContent = "❤️";
                    UI.showToast("Saved ❤️", `${product.name} added to wishlist`);
                }
            }
        });
    }
};

const Designers = {
    init() {
        this.render();
        this.bindEvents();
    },
    render() {
        document.getElementById("designersGrid").innerHTML = Data.designers.map((d, i) => `
            <div class="designer-card reveal" style="transition-delay:${i * 0.08}s">
                <div class="d-avatar" aria-hidden="true"><img src="${d.img}" alt="${d.name}"></div>
                <div class="d-name">${d.name}</div>
                <div class="d-location">📍 ${d.loc}</div>
                <div class="d-tag">${d.spec}</div>
                <div class="d-stats">
                    <div><div class="ds-num">${d.items}</div><div class="ds-label">Products</div></div>
                    <div><div class="ds-num">${d.rating}</div><div class="ds-label">Rating</div></div>
                </div>
                <button class="d-btn" data-name="${d.name}">View Catalog →</button>
            </div>
        `).join("");
        
        // Tell the observer to track these newly added designer cards!
        UI.Observer.init();
    },
    generateDust() {
        const particles = document.getElementById('dParticles');
        particles.innerHTML = ''; 
        for (let i = 0; i < 25; i++) {
            const mote = document.createElement('div');
            mote.classList.add('dust-mote');
            mote.style.left = `${Math.random() * 100}%`;
            mote.style.top = `${Math.random() * 60 + 40}%`; 
            mote.style.width = mote.style.height = `${Math.random() * 3 + 1}px`;
            mote.style.animationDuration = `${Math.random() * 3 + 3}s`;
            mote.style.animationDelay = `${Math.random() * 2}s`;
            particles.appendChild(mote);
        }
    },
    openPopup(designerName) {
        const designer = Data.designers.find(d => d.name === designerName);
        if (!designer) return;

        document.getElementById('popupDesignerImg').src = designer.img;
        document.getElementById('popupName').textContent = designer.name;
        document.getElementById('popupStory').textContent = designer.story;

        const wm = document.getElementById('popupWatermark');
        if (designer.name === "Sonia Uzele") {
            wm.style.display = "block"; wm.textContent = "Sonia's Palace";
        } else {
            wm.style.display = "none";
        }

        this.generateDust();
        UI.Modal.open("designerImgOverlay");
    },
    bindEvents() {
        document.getElementById("designersGrid").addEventListener("click", e => {
            const btn = e.target.closest(".d-btn");
            const avatar = e.target.closest('.d-avatar');
            if (btn) UI.showToast(`Opening ${btn.dataset.name}`, "Loading catalog...");
            if (avatar) {
                const name = avatar.closest('.designer-card').querySelector('.d-btn').dataset.name;
                this.openPopup(name);
            }
        });

        document.getElementById('popupCloseBtn').addEventListener('click', () => UI.Modal.close("designerImgOverlay"));
        document.getElementById('designerImgOverlay').addEventListener('click', (e) => {
            if (e.target.id === 'designerImgOverlay') UI.Modal.close("designerImgOverlay");
        });
    }
};

const Tailors = {
    init() {
        this.track = document.getElementById("tailorTrack");
        this.activeIndex = 0;
        this.cards = [];
        this.render();
        this.bindEvents();
    },
    render() {
        this.track.innerHTML = "";
        Data.tailors.forEach((t, index) => {
            const card = document.createElement("div");
            card.classList.add("t-card-3d");
            card.dataset.index = index;
            
            const feedbacks = t.feedbacks.map(f => `<div class="t-feedback-item">"${f}"</div>`).join("");

            card.innerHTML = `
                <div class="t-header">
                    <img src="${t.img}" class="t-avatar-img" alt="${t.name}">
                    <div class="t-info-main">
                        <div class="t-name">${t.name}</div>
                        <div class="t-loc">${ICONS.loc} ${t.loc}</div>
                        <div class="t-spec">${t.spec}</div>
                    </div>
                </div>
                <div class="t-stats-grid">
                    <div class="t-stat">
                        <div class="t-stat-val">${ICONS.star} ${t.stars} <span style="font-weight:400; font-size:0.75rem; color:var(--ink-60)">(${t.reviews})</span></div>
                        <div class="t-stat-label">Rating</div>
                    </div>
                    <div class="t-stat">
                        <div class="t-stat-val">₦${t.rate.toLocaleString()}</div>
                        <div class="t-stat-label">Per Outfit</div>
                    </div>
                    <div class="t-stat">
                        <div class="t-stat-val">${ICONS.box} ${t.orders}</div>
                        <div class="t-stat-label">Orders</div>
                    </div>
                    <div class="t-stat">
                        <div class="t-stat-val">${ICONS.clock} ${t.onTime}</div>
                        <div class="t-stat-label">On-Time</div>
                    </div>
                </div>
                <div class="t-contacts">
                    <a href="tel:${t.phone}" class="t-contact-link">${ICONS.phone} Call</a>
                    <a href="https://wa.me/${t.wa}" target="_blank" rel="noopener noreferrer" class="t-contact-link">${ICONS.wa} Chat</a>
                </div>
                <div class="t-feedback-wrap">
                    <button class="t-feedback-toggle" aria-expanded="false">Customer Feedback ${ICONS.chevron}</button>
                    <div class="t-feedback-list">${feedbacks}</div>
                </div>
                <div class="t-actions">
                    <button class="btn-t-action btn-t-outline" data-action="portfolio" data-name="${t.name}">Past Works</button>
                    <button class="btn-t-action btn-t-solid" data-action="book" data-name="${t.name}">Book Tailor</button>
                </div>
            `;

            const toggleBtn = card.querySelector('.t-feedback-toggle');
            const fbList = card.querySelector('.t-feedback-list');
            toggleBtn.addEventListener('click', () => {
                const isOpen = toggleBtn.classList.contains('open');
                document.querySelectorAll('.t-feedback-toggle').forEach(b => b.classList.remove('open'));
                document.querySelectorAll('.t-feedback-list').forEach(l => l.classList.remove('open'));
                if (!isOpen) { toggleBtn.classList.add('open'); fbList.classList.add('open'); }
            });

            this.track.appendChild(card);
            this.cards.push(card);
        });
        this.updateCarousel();
    },
    updateCarousel() {
        const total = this.cards.length;
        this.cards.forEach((card, index) => {
            let offset = index - this.activeIndex;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            if (offset === 0) {
                card.style.transform = `translateX(0) scale(1) rotateY(0deg)`;
                card.style.opacity = 1; card.style.filter = `blur(0px)`;
                card.style.zIndex = 10; card.style.pointerEvents = 'auto';
            } else if (Math.abs(offset) === 1) {
                const sign = Math.sign(offset);
                card.style.transform = `translateX(${sign * 110}%) scale(0.85) rotateY(${sign * -15}deg)`;
                card.style.opacity = 0.6; card.style.filter = `blur(2px)`;
                card.style.zIndex = 8; card.style.pointerEvents = 'none';
            } else {
                const sign = Math.sign(offset);
                card.style.transform = `translateX(${sign * 190}%) scale(0.7) rotateY(${sign * -25}deg)`;
                card.style.opacity = 0; card.style.filter = `blur(4px)`;
                card.style.zIndex = 1; card.style.pointerEvents = 'none';
            }
        });
    },
    bindEvents() {
        document.getElementById("tailorPrevBtn").addEventListener('click', () => {
            this.activeIndex = (this.activeIndex - 1 + this.cards.length) % this.cards.length;
            this.updateCarousel();
        });

        document.getElementById("tailorNextBtn").addEventListener('click', () => {
            this.activeIndex = (this.activeIndex + 1) % this.cards.length;
            this.updateCarousel();
        });

        this.track.addEventListener("click", e => {
            const btn = e.target.closest(".btn-t-action");
            if (!btn) return;
            const name = btn.dataset.name;
            if (btn.dataset.action === "portfolio") {
                UI.showToast("Loading Portfolio", `Fetching past works for ${name}...`);
            } else if (btn.dataset.action === "book") {
                Data.state.selectedTailor = name;
                document.getElementById("tailorBadge").style.display = "inline-flex";
                document.getElementById("tailorBadgeText").textContent = name;
                document.getElementById("bookingSection").scrollIntoView({ behavior: "smooth", block: "center" });
                UI.showToast("Tailor Selected", `Fill out the form below to book ${name}`);
            }
        });

        // Swipe logic
        let startX = 0, endX = 0;
        this.track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
        this.track.addEventListener('touchend', e => {
            endX = e.changedTouches[0].clientX;
            if (startX - endX > 50) { this.activeIndex = (this.activeIndex + 1) % this.cards.length; this.updateCarousel(); }
            else if (endX - startX > 50) { this.activeIndex = (this.activeIndex - 1 + this.cards.length) % this.cards.length; this.updateCarousel(); }
        }, { passive: true });
    }
};

const SmartFit = {
    init() {
        this.bindEvents();
    },
    bindEvents() {
        document.getElementById("skinOptions").addEventListener("click", e => {
            const btn = e.target.closest(".skin-btn");
            if (!btn) return;
            document.querySelectorAll(".skin-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            Data.state.selectedTone = btn.dataset.tone;
        });

        document.getElementById("clearFilters").addEventListener("click", () => {
            ["bodyShape", "budgetFilter", "occasionFilter", "genderFilter"].forEach(id => document.getElementById(id).value = "");
            document.querySelectorAll(".skin-btn").forEach(b => b.classList.remove("active"));
            Data.state.selectedTone = "";
            document.getElementById("resultsArea").innerHTML = "";
            UI.showToast("Filters Cleared", "All filters have been reset");
        });

        document.getElementById("runSmartFit").addEventListener("click", () => this.filterData());
    },
    filterData() {
        const shape = document.getElementById("bodyShape").value;
        const budget = document.getElementById("budgetFilter").value;
        const occasion = document.getElementById("occasionFilter").value;
        const gender = document.getElementById("genderFilter").value;

        const results = Data.products.filter(p => {
            if (Data.state.selectedTone && !p.tone.includes(Data.state.selectedTone)) return false;
            if (shape && !p.body.includes(shape)) return false;
            if (budget && p.range !== budget) return false;
            if (occasion && !p.occ.includes(occasion)) return false;
            if (gender && p.gender !== "unisex" && p.gender !== gender) return false;
            return true;
        });

        const area = document.getElementById("resultsArea");
        if (results.length === 0) {
            area.innerHTML = `<div class="results-grid"><div class="no-results"><strong>No exact matches</strong>Try relaxing a filter or two — we have 18,000+ pieces to explore!</div></div>`;
            return;
        }

        area.innerHTML = `<div class="results-grid">${results.map((p, i) => `
            <div class="result-card" style="animation-delay:${i * 0.07}s">
                <div class="result-img"><img src="${p.img}" class="product-real-img" alt="${p.name}"><div class="result-badge">Best Match</div></div>
                <div class="result-body">
                    <div class="result-name">${p.name}</div>
                    <div class="result-brand">${p.brand}</div>
                    <div class="result-price">₦${p.price.toLocaleString()}</div>
                    <div class="result-tags">
                        ${p.body.map(b => `<span class="result-tag">${b}</span>`).join("")}
                        ${p.occ.map(o => `<span class="result-tag">${o}</span>`).join("")}
                    </div>
                </div>
            </div>
        `).join("")}</div>`;

        UI.showToast(`${results.length} Match${results.length > 1 ? "es" : ""} Found ✦`, "Scroll down to see your picks");
        area.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
};

const VFR = {
    state: { product: null, skinTone: "medium", bodyShape: "hourglass", size: "M" },
    colors: { fair: "#f5d5b8", medium: "#d4956a", tan: "#b87040", deep: "#7a4520", rich: "#3d1f0a" },
    
    init() { this.bindEvents(); },
    
    buildSVG() {
        const skin = this.colors[this.state.skinTone] || "#d4956a";

        // Define exact coordinate landmarks for realistic silhouette morphing
        // sl/sr = Shoulder Left/Right | wl/wr = Waist Left/Right | hl/hr = Hip Left/Right
        const shapes = {
            hourglass: { sl: 65, sr: 135, wl: 76, wr: 124, hl: 52, hr: 148 },
            pear:      { sl: 74, sr: 126, wl: 72, wr: 128, hl: 35, hr: 165 }, // Narrow shoulders, very wide hips
            apple:     { sl: 62, sr: 138, wl: 46, wr: 154, hl: 64, hr: 136 }, // Fuller midsection
            athletic:  { sl: 50, sr: 150, wl: 70, wr: 130, hl: 68, hr: 132 }, // Broad shoulders, narrow hips
            rectangle: { sl: 65, sr: 135, wl: 65, wr: 135, hl: 65, hr: 135 }  // Straight profile
        };

        const basePts = shapes[this.state.bodyShape] || shapes.hourglass;

        // Size multiplier dynamically scales the width of the torso points away from the center
        const sizeMults = { "XS": 0.85, "S": 0.92, "M": 1.0, "L": 1.15, "XL": 1.3, "XXL": 1.45 };
        const sM = sizeMults[this.state.size] || 1.0;

        // Function to scale a point outward/inward from the center axis (x=100)
        const scaleX = (val) => 100 + (val - 100) * sM;
        
        const pts = {
            sl: scaleX(basePts.sl), sr: scaleX(basePts.sr),
            wl: scaleX(basePts.wl), wr: scaleX(basePts.wr),
            hl: scaleX(basePts.hl), hr: scaleX(basePts.hr)
        };

        return `
            <svg class="vfr-base-svg" viewBox="0 0 200 450" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <radialGradient id="faceGrad" cx="50%" cy="50%" r="50%">
                        <stop offset="60%" stop-color="${skin}"/>
                        <stop offset="100%" stop-color="rgba(0,0,0,0.2)"/>
                    </radialGradient>
                </defs>
                <g>
                    <ellipse cx="100" cy="40" rx="20" ry="26" fill="url(#faceGrad)"/>
                    <rect x="91" y="60" width="18" height="30" fill="${skin}"/>

                    <path d="
                        M ${pts.sl} 90
                        Q 100 85 ${pts.sr} 90
                        Q ${pts.sr+10} 110 ${pts.wr} 160
                        Q ${pts.wr-15} 200 ${pts.hr} 260
                        Q ${pts.hr+7} 290 ${pts.hr-6} 350
                        L 110 440 L 90 440
                        L ${pts.hl+6} 350
                        Q ${pts.hl-7} 290 ${pts.hl} 260
                        Q ${pts.wl+15} 200 ${pts.wl} 160
                        Q ${pts.sl-10} 110 ${pts.sl} 90 Z"
                    fill="${skin}" style="transition: d 0.4s cubic-bezier(0.25, 1, 0.5, 1);"/>

                    <path d="M ${pts.sl-3} 95 Q ${pts.sl-35} 130 ${pts.sl-25} 240" stroke="${skin}" stroke-width="14" stroke-linecap="round" fill="none" style="transition: d 0.4s cubic-bezier(0.25, 1, 0.5, 1);"/>
                    <path d="M ${pts.sr+3} 95 Q ${pts.sr+35} 130 ${pts.sr+25} 240" stroke="${skin}" stroke-width="14" stroke-linecap="round" fill="none" style="transition: d 0.4s cubic-bezier(0.25, 1, 0.5, 1);"/>
                </g>
            </svg>
        `;
    },
    
    renderAvatar() {
        if (!this.state.product) return;
        
        // Adjust the clothing layer's width to match the newly generated body proportions
        const baseClothingWidth = 50; 
        const sizeMults = { "XS": 0.85, "S": 0.92, "M": 1.0, "L": 1.15, "XL": 1.3, "XXL": 1.45 };
        const sM = sizeMults[this.state.size] || 1.0;
        
        const shapeMults = { hourglass: 1.05, pear: 1.2, apple: 1.25, athletic: 1.0, rectangle: 0.95 };
        const shapeM = shapeMults[this.state.bodyShape] || 1.0;

        const finalWidth = `${baseClothingWidth * sM * shapeM}%`;

        document.getElementById("vfrAvatarWrap").innerHTML = `
            ${this.buildSVG()}
            <img src="${this.state.product.img}" class="vfr-clothing-layer" style="width: ${finalWidth}; transition: width 0.4s cubic-bezier(0.25, 1, 0.5, 1);" alt="Try On">
        `;
    },
    
    updateIndicators() {
        const { product, skinTone, bodyShape } = this.state;
        const styleScore = product.body.includes(bodyShape) ? 95 : 72;
        const toneScore = product.tone.includes(skinTone) ? 98 : 80;

        document.getElementById("vfrStyleMatch").textContent = styleScore >= 90 ? "Excellent" : "Good";
        document.getElementById("vfrBodyMatch").textContent = styleScore >= 90 ? "Perfect Fit" : "Good Fit";
        document.getElementById("vfrToneMatch").textContent = toneScore >= 90 ? "Harmonious" : "Flattering";

        setTimeout(() => {
            document.getElementById("vfrStyleBar").style.width = styleScore + "%";
            document.getElementById("vfrBodyBar").style.width = (styleScore - 5) + "%";
            document.getElementById("vfrToneBar").style.width = toneScore + "%";
        }, 150);
    },

    open(productId) {
        this.state.product = Data.products.find(p => p.id === productId);
        if (!this.state.product) return;
        
        this.state.skinTone = Data.state.selectedTone || "medium";
        this.state.bodyShape = document.getElementById("bodyShape").value || "hourglass";
        this.state.size = "M";

        document.getElementById("vfrProductName").textContent = this.state.product.name;
        document.getElementById("vfrProductBrand").textContent = `by ${this.state.product.brand}`;
        document.getElementById("vfrProductPrice").textContent = document.getElementById("vfrCartPrice").textContent = `₦${this.state.product.price.toLocaleString()}`;

        // Reset Size buttons UI on open
        document.querySelectorAll(".vfr-size-btn").forEach(b => b.classList.remove("active"));
        document.querySelector(`.vfr-size-btn[data-size="M"]`).classList.add("active");

        this.renderAvatar();
        this.updateIndicators();
        UI.Modal.open("vfrOverlay");
    },
    
    bindEvents() {
        document.getElementById("vfrCloseBtn").addEventListener("click", () => UI.Modal.close("vfrOverlay"));
        document.getElementById("vfrOverlay").addEventListener("click", e => { if (e.target.id === "vfrOverlay") UI.Modal.close("vfrOverlay"); });

        document.getElementById("vfrSkinRow").addEventListener("click", e => {
            const dot = e.target.closest(".vfr-skin-dot");
            if (dot) {
                document.querySelectorAll(".vfr-skin-dot").forEach(d => d.classList.remove("active"));
                dot.classList.add("active");
                this.state.skinTone = dot.dataset.tone;
                this.renderAvatar(); this.updateIndicators();
            }
        });

        document.getElementById("vfrShapeRow").addEventListener("click", e => {
            const btn = e.target.closest(".vfr-shape-btn");
            if (btn) {
                document.querySelectorAll(".vfr-shape-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                this.state.bodyShape = btn.dataset.shape;
                this.renderAvatar(); this.updateIndicators();
            }
        });

        document.getElementById("vfrSizeRow").addEventListener("click", e => {
            const btn = e.target.closest(".vfr-size-btn");
            if (btn) {
                document.querySelectorAll(".vfr-size-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                this.state.size = btn.dataset.size;
                this.renderAvatar();
            }
        });

        document.getElementById("vfrAddToCart").addEventListener("click", () => {
            const p = this.state.product;
            if (Data.state.cart.find(i => i.id === p.id)) {
                UI.showToast("Already in Cart", `${p.name} is already in your cart.`);
            } else {
                Data.state.cart.push(p);
                Cart.updateUI();
                UI.showToast("Added to Cart 🛒", `${p.name} — ₦${p.price.toLocaleString()}`);
            }
            UI.Modal.close("vfrOverlay");
        });
    }
};

const FormsAndModals = {
    init() {
        // Book Tailor Form
        document.getElementById("bookingForm").addEventListener("submit", e => {
            e.preventDefault();
            const btn = document.getElementById("bookSubmit");
            btn.disabled = true; btn.textContent = "Booking...";
            setTimeout(() => {
                UI.showToast("Booking Confirmed! 🎉", `Appointment set`);
                e.target.reset();
                document.getElementById("tailorBadge").style.display = "none";
                btn.disabled = false; btn.innerHTML = 'Confirm Booking';
            }, 800);
        });

        // Designer Modal
        document.getElementById("openDesignerModal").addEventListener("click", () => UI.Modal.open("designerModal"));
        document.getElementById("openDesignerModal2").addEventListener("click", () => UI.Modal.open("designerModal"));
        document.getElementById("closeDesignerModal").addEventListener("click", () => UI.Modal.close("designerModal"));
        document.getElementById("modalDone").addEventListener("click", () => { UI.Modal.close("designerModal"); UI.Modal.resetForm("designerForm", "designerSuccess"); });
        document.getElementById("designerForm").addEventListener("submit", e => { e.preventDefault(); e.target.style.display = "none"; document.getElementById("designerSuccess").style.display = "block"; });

        // Tailor Modal
        document.getElementById("openTailorModalBtn").addEventListener("click", () => UI.Modal.open("tailorModal"));
        document.getElementById("closeTailorModal").addEventListener("click", () => UI.Modal.close("tailorModal"));
        document.getElementById("tailorModalDone").addEventListener("click", () => { UI.Modal.close("tailorModal"); UI.Modal.resetForm("tailorForm", "tailorSuccess"); });
        document.getElementById("tailorForm").addEventListener("submit", e => { e.preventDefault(); e.target.style.display = "none"; document.getElementById("tailorSuccess").style.display = "block"; });

        // Global Close Handlers
        document.addEventListener("keydown", e => {
            if (e.key === "Escape") { UI.Modal.close("designerModal"); UI.Modal.close("tailorModal"); UI.Modal.close("vfrOverlay"); UI.Modal.close("cartOverlay"); UI.Modal.close("designerImgOverlay"); }
        });
    }
};

const Animations = {
    initHeroSlider() {
        const slides = document.querySelectorAll('.hero-slide');
        const dots = document.querySelectorAll('.hero-dot');
        if (slides.length === 0) return;
        
        let currentSlide = 0, slideInterval;
        
        const goToSlide = (index) => {
            slides[currentSlide].classList.remove('active');
            if(dots.length) dots[currentSlide].classList.remove('active');
            currentSlide = (index + slides.length) % slides.length;
            slides[currentSlide].classList.add('active');
            if(dots.length) dots[currentSlide].classList.add('active');
        };

        const resetInterval = () => { clearInterval(slideInterval); slideInterval = setInterval(() => goToSlide(currentSlide + 1), 6500); };
        
        dots.forEach((dot, index) => dot.addEventListener('click', () => { goToSlide(index); resetInterval(); }));
        resetInterval();
    },

    initTestimonials() {
        document.getElementById("testiTrack").innerHTML = [...Data.testimonials, ...Data.testimonials].map(t => `
            <div class="testi-card">
                <div class="testi-stars" aria-hidden="true">${t.stars}</div>
                <blockquote class="testi-text">"${t.text}"</blockquote>
                <div class="testi-author">
                    <div class="testi-avatar" aria-hidden="true"><img src="${t.img}" alt="${t.name}"></div>
                    <div><div class="testi-name">${t.name}</div><div class="testi-role">${t.role}</div></div>
                </div>
            </div>
        `).join("");
    },

    init3DScroll() {
        const track = document.querySelector('.naija-thread-container');
        if (!track) return;
        
        const panels = document.querySelectorAll('.panel');
        const progressFill = document.querySelector('.progress-fill');
        let isTicking = false;

        window.addEventListener('scroll', () => {
            if (!isTicking) {
                window.requestAnimationFrame(() => {
                    const rect = track.getBoundingClientRect();
                    let scrollProgress = Math.max(0, Math.min(1, (-rect.top) / (rect.height - window.innerHeight)));
                    
                    progressFill.style.height = `${scrollProgress * 100}%`;

                    panels.forEach((panel, index) => {
                        let localProgress = Math.max(-1, Math.min(1, (scrollProgress - (index / (panels.length - 1))) * (panels.length - 1)));
                        let opacity = Math.max(0, 1 - Math.pow(Math.abs(localProgress), 1.5));
                        let translateZ = localProgress < 0 ? localProgress * 1000 : localProgress * 600;
                        let translateY = localProgress < 0 ? localProgress * -50 : localProgress * -200;
                        let rotateX = localProgress < 0 ? localProgress * 25 : localProgress * 15;

                        panel.style.opacity = opacity;
                        panel.style.transform = `translate3d(0, ${translateY}px, ${translateZ}px) rotateX(${rotateX}deg) scale(${1 + (localProgress * 0.1)})`;
                    });
                    isTicking = false;
                });
                isTicking = true;
            }
        });
    }
};

// ==========================================
// 4. INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Generate mock data
    Data.generateProducts();

    // Init UI Modules
    Header.init();
    Cart.init();
    Products.init();
    Designers.init();
    Tailors.init();
    SmartFit.init();
    VFR.init();
    FormsAndModals.init();

    // Init Animations
    Animations.initHeroSlider();
    Animations.initTestimonials();
    Animations.init3DScroll();

    // Utilities Config
    const todayStr = new Date().toISOString().split("T")[0];
    const dateInput = document.getElementById("bookDate");
    if(dateInput) dateInput.setAttribute("min", todayStr);

    // Global touch fallback for mobile
    document.addEventListener("click", e => {
        if (window.matchMedia("(hover: none)").matches && !e.target.closest('.product-card')) {
            document.querySelectorAll('.product-card.touch-active').forEach(c => c.classList.remove('touch-active'));
        }
    });
});

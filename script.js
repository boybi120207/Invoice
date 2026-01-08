// Database Harga
const priceDatabase = [
    { origin: "KARAWANG", area: "BEKASI", destination: "CIKARANG", wingbox: 1342900, fuso: 1132500, cdd_l: 1000000, cdd: 600000, cde: 550000, blindvan: 400000 },
    { origin: "KARAWANG", area: "BEKASI", destination: "TAMBUN", wingbox: 1549000, fuso: 1345000, cdd_l: 1100000, cdd: 900000, cde: 600000, blindvan: 450000 },
    { origin: "KARAWANG", area: "BEKASI", destination: "JABABEKA", wingbox: 1425400, fuso: 1217500, cdd_l: 1050000, cdd: 600000, cde: 550000, blindvan: 400000 },
    { origin: "KARAWANG", area: "BEKASI", destination: "CAKUNG", wingbox: 1713900, fuso: 1430000, cdd_l: 1219200, cdd: 920000, cde: 650000, blindvan: 500000 },
    { origin: "KARAWANG", area: "BEKASI", destination: "MARUNDA", wingbox: 1713900, fuso: 1600000, cdd_l: 1342900, cdd: 920000, cde: 700000, blindvan: 500000 },
    { origin: "KARAWANG", area: "JAKARTA TIMUR", destination: "CAKUNG", wingbox: 1713900, fuso: 1430000, cdd_l: 1219200, cdd: 920000, cde: 685000, blindvan: 500000 },
    { origin: "KARAWANG", area: "JAKARTA TIMUR", destination: "PULO GADUNG", wingbox: 1796400, fuso: 1466600, cdd_l: 1219200, cdd: 920000, cde: 685000, blindvan: 500000 },
    { origin: "KARAWANG", area: "JAKARTA UTARA", destination: "CILINCING", wingbox: 1878800, fuso: 1549000, cdd_l: 1342900, cdd: 920000, cde: 750000, blindvan: 500000 },
    { origin: "KARAWANG", area: "JAKARTA UTARA", destination: "PLUIT", wingbox: 1878800, fuso: 1672700, cdd_l: 1384100, cdd: 1000000, cde: 750000, blindvan: 500000 },
    { origin: "KARAWANG", area: "JAKARTA UTARA", destination: "SUNTER", wingbox: 1878800, fuso: 1549000, cdd_l: 1342900, cdd: 980000, cde: 750000, blindvan: 500000 },
    { origin: "KARAWANG", area: "JAKARTA UTARA", destination: "KELAPA GADING", wingbox: 1878800, fuso: 1549000, cdd_l: 1342900, cdd: 980000, cde: 750000, blindvan: 500000 },
    { origin: "KARAWANG", area: "JAKARTA UTARA", destination: "TANJUNG PRIOK", wingbox: 1961300, fuso: 1672700, cdd_l: 1342900, cdd: 910000, cde: 750000, blindvan: 500000 },
    { origin: "KARAWANG", area: "JAKARTA UTARA", destination: "BANDENGAN", wingbox: 1878800, fuso: 1672700, cdd_l: 1342900, cdd: 910000, cde: 715000, blindvan: 500000 },
    { origin: "KARAWANG", area: "JAKARTA UTARA", destination: "LODEN", wingbox: 1961300, fuso: 1672700, cdd_l: 1342900, cdd: 910000, cde: 750000, blindvan: 500000 },
    { origin: "KARAWANG", area: "JAKARTA UTARA", destination: "ANCOL", wingbox: 1961300, fuso: 1672700, cdd_l: 1342900, cdd: 910000, cde: 750000, blindvan: 500000 },
    { origin: "KARAWANG", area: "JAKARTA PUSAT", destination: "KEMAYORAN", wingbox: 1878800, fuso: 1549000, cdd_l: 1342900, cdd: 970000, cde: 750000, blindvan: 500000 },
    { origin: "KARAWANG", area: "JAKARTA PUSAT", destination: "TANAH ABANG", wingbox: 2043700, fuso: 1755200, cdd_l: 1425400, cdd: 1000000, cde: 800000, blindvan: 500000 },
    { origin: "KARAWANG", area: "JAKARTA BARAT", destination: "DAAN MOGOT", wingbox: 2043700, fuso: 1755200, cdd_l: 1425400, cdd: 1000000, cde: 800000, blindvan: 500000 },
    { origin: "KARAWANG", area: "JAKARTA BARAT", destination: "GROGOL", wingbox: 2043700, fuso: 1755200, cdd_l: 1425400, cdd: 1000000, cde: 800000, blindvan: 500000 },
    { origin: "KARAWANG", area: "JAKARTA BARAT", destination: "KAPUK", wingbox: 2043700, fuso: 1755200, cdd_l: 1425400, cdd: 1000000, cde: 800000, blindvan: 500000 },
    { origin: "KARAWANG", area: "JAKARTA BARAT", destination: "PESING", wingbox: 2043700, fuso: 1755200, cdd_l: 1425400, cdd: 1000000, cde: 800000, blindvan: 500000 },
    { origin: "KARAWANG", area: "JAKARTA BARAT", destination: "ANGKE", wingbox: 2043700, fuso: 1755200, cdd_l: 1425400, cdd: 1000000, cde: 800000, blindvan: 500000 },
    { origin: "KARAWANG", area: "TANGERANG", destination: "TANGERANG", wingbox: 2703300, fuso: 2538400, cdd_l: 1631500, cdd: 1020000, cde: 890000, blindvan: 550000 },
    { origin: "KARAWANG", area: "TANGERANG", destination: "CIKUPA", wingbox: 2703300, fuso: 2538400, cdd_l: 1631500, cdd: 1020000, cde: 890000, blindvan: 550000 },
    { origin: "KARAWANG", area: "TANGERANG", destination: "DADAP", wingbox: 2703300, fuso: 2538400, cdd_l: 1631500, cdd: 1020000, cde: 890000, blindvan: 550000 },
    { origin: "KARAWANG", area: "TANGERANG", destination: "CENGKARENG", wingbox: 2703300, fuso: 2538400, cdd_l: 1631500, cdd: 1020000, cde: 890000, blindvan: 550000 },
    { origin: "KARAWANG", area: "TANGERANG", destination: "CIKANDE", wingbox: 2900000, fuso: 2630000, cdd_l: 1750000, cdd: 1200000, cde: 1150000, blindvan: 700000 },
    { origin: "KARAWANG", area: "TANGERANG", destination: "CLEGON", wingbox: 3156800, fuso: 2785800, cdd_l: 2650000, cdd: 2000000, cde: 1300000, blindvan: 900000 },
    { origin: "KARAWANG", area: "JAWA BARAT", destination: "BANDUNG", wingbox: 3280500, fuso: 2991900, cdd_l: 2650000, cdd: 1740000, cde: 1130000, blindvan: 850000 },
    { origin: "KARAWANG", area: "JAWA BARAT", destination: "CIREBON", wingbox: 100000, fuso: 0, cdd_l: 0, cdd: 2200000, cde: 1600000, blindvan: 1000000 },
    { origin: "KARAWANG", area: "JAWA TENGAH", destination: "SEMARANG", wingbox: 5836400, fuso: 5350000, cdd_l: 3900000, cdd: 3150000, cde: 2450000, blindvan: 1700000 },
    { origin: "KARAWANG", area: "JAWA TENGAH", destination: "YOGYAKARTA", wingbox: 6083800, fuso: 5500000, cdd_l: 4850000, cdd: 3150000, cde: 3000000, blindvan: 2000000 },
    { origin: "KARAWANG", area: "JAWA TENGAH", destination: "PURWOKERTO", wingbox: 5836400, fuso: 5183000, cdd_l: 4000000, cdd: 3150000, cde: 2450000, blindvan: 1700000 },
    { origin: "KARAWANG", area: "JAWA TIMUR", destination: "SURABAYA", wingbox: 7320500, fuso: 6300000, cdd_l: 5500000, cdd: 3850000, cde: 3750000, blindvan: 2700000 },
    { origin: "KARAWANG", area: "BALI", destination: "BALI", wingbox: 13339400, fuso: 10700000, cdd_l: 7650000, cdd: 7050000, cde: 6000000, blindvan: 5500000 },
    { origin: "KARAWANG", area: "SUMATERA", destination: "LAMPUNG", wingbox: 12514900, fuso: 10600000, cdd_l: 6650000, cdd: 5350000, cde: 4900000, blindvan: 4000000 },
    { origin: "KARAWANG", area: "BOGOR", destination: "RUMPIN", wingbox: 2863495, fuso: 2697860, cdd_l: 1750000, cdd: 1175000, cde: 1000000, blindvan: 650000 }
];

// Data Storage
let invoices = [];
let editingId = null;
let items = [{ description: '', quantity: 1, price: 0, area: '', destination: '', vehicle: '' }];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadInvoices();
    renderItems();
    setDefaultDate();
    
    document.getElementById('taxRate').addEventListener('input', calculateTotals);
});

// Set default date
function setDefaultDate() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('invoiceDate').value = today;
}

// Get unique areas
function getUniqueAreas() {
    const areas = [...new Set(priceDatabase.map(item => item.area))];
    return areas.sort();
}

// Get destinations by area
function getDestinationsByArea(area) {
    const destinations = priceDatabase
        .filter(item => item.area === area)
        .map(item => item.destination);
    return [...new Set(destinations)].sort();
}

// Get price by selection
function getPriceBySelection(area, destination, vehicle) {
    const item = priceDatabase.find(
        db => db.area === area && db.destination === destination
    );
    
    if (!item) return 0;
    
    const vehicleMap = {
        'Wingbox': 'wingbox',
        'Fuso': 'fuso',
        'CDD L': 'cdd_l',
        'CDD': 'cdd',
        'CDE': 'cde',
        'Blindvan': 'blindvan'
    };
    
    return item[vehicleMap[vehicle]] || 0;
}

// Load invoices from localStorage
function loadInvoices() {
    const stored = localStorage.getItem('invoices');
    if (stored) {
        invoices = JSON.parse(stored);
        renderInvoiceTable();
    }
}

// Save invoices to localStorage
function saveInvoicesToStorage() {
    localStorage.setItem('invoices', JSON.stringify(invoices));
}

// Generate Invoice Number
function generateInvoiceNumber() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const random = Math.floor(Math.random() * 10000);
    return `INV-${year}${month}-${random}`;
}

// Format Currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// Format Date
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

// Open Form Modal
function openForm() {
    document.getElementById('formModal').classList.add('active');
    document.getElementById('formTitle').textContent = 'Buat Invoice Baru';
    editingId = null;
    resetForm();
}

// Close Form Modal
function closeForm() {
    document.getElementById('formModal').classList.remove('active');
    editingId = null;
    resetForm();
}

// Reset Form
function resetForm() {
    document.getElementById('invoiceNumber').value = '';
    document.getElementById('invoiceDate').value = new Date().toISOString().split('T')[0];
    document.getElementById('taxRate').value = '0';
    document.getElementById('customerName').value = '';
    document.getElementById('customerAddress').value = '';
    document.getElementById('notes').value = '';
    
    items = [{ description: '', quantity: 1, price: 0, area: '', destination: '', vehicle: '' }];
    renderItems();
    calculateTotals();
}

// Render Items
function renderItems() {
    const container = document.getElementById('itemsContainer');
    container.innerHTML = '';
    
    const areas = getUniqueAreas();
    const vehicles = ['Wingbox', 'Fuso', 'CDD L', 'CDD', 'CDE', 'Blindvan'];
    
    items.forEach((item, index) => {
        const destinations = item.area ? getDestinationsByArea(item.area) : [];
        
        const row = document.createElement('div');
        row.className = 'item-row-auto';
        row.innerHTML = `
            <input type="text" placeholder="Deskripsi" value="${item.description}" 
                   onchange="updateItem(${index}, 'description', this.value)">
            
            <select onchange="updateItemArea(${index}, this.value)">
                <option value="">Pilih Area</option>
                ${areas.map(area => `<option value="${area}" ${item.area === area ? 'selected' : ''}>${area}</option>`).join('')}
            </select>
            
            <select onchange="updateItemDestination(${index}, this.value)" ${!item.area ? 'disabled' : ''}>
                <option value="">Pilih Tujuan</option>
                ${destinations.map(dest => `<option value="${dest}" ${item.destination === dest ? 'selected' : ''}>${dest}</option>`).join('')}
            </select>
            
            <select onchange="updateItemVehicle(${index}, this.value)" ${!item.destination ? 'disabled' : ''}>
                <option value="">Pilih Kendaraan</option>
                ${vehicles.map(vehicle => `<option value="${vehicle}" ${item.vehicle === vehicle ? 'selected' : ''}>${vehicle}</option>`).join('')}
            </select>
            
            <input type="number" placeholder="Qty" value="${item.quantity}" min="1"
                   onchange="updateItem(${index}, 'quantity', this.value)">
            
            <input type="number" placeholder="Harga Total" value="${item.price}" min="0" readonly 
                   style="background: #f3f4f6;">
            
            ${items.length > 1 ? `<button type="button" class="btn-danger" onclick="removeItem(${index})">🗑️</button>` : '<div></div>'}
        `;
        container.appendChild(row);
    });
    
    calculateTotals();
}

// Update Item Area
function updateItemArea(index, area) {
    items[index].area = area;
    items[index].destination = '';
    items[index].vehicle = '';
    items[index].price = 0;
    renderItems();
}

// Update Item Destination
function updateItemDestination(index, destination) {
    items[index].destination = destination;
    items[index].vehicle = '';
    items[index].price = 0;
    renderItems();
}

// Update Item Vehicle
function updateItemVehicle(index, vehicle) {
    items[index].vehicle = vehicle;
    const price = getPriceBySelection(items[index].area, items[index].destination, vehicle);
    items[index].price = price;
    renderItems();
}

// Add Item
function addItem() {
    items.push({ description: '', quantity: 1, price: 0, area: '', destination: '', vehicle: '' });
    renderItems();
}

// Remove Item
function removeItem(index) {
    items.splice(index, 1);
    renderItems();
}

// Update Item
function updateItem(index, field, value) {
    if (field === 'quantity') {
        items[index][field] = parseInt(value) || 1;
    } else if (field === 'price') {
        items[index][field] = parseFloat(value) || 0;
    } else {
        items[index][field] = value;
    }
    calculateTotals();
}

// Calculate Totals
function calculateTotals() {
    const subtotal = items.reduce((sum, item) => sum + item.price, 0);
    const taxRate = parseFloat(document.getElementById('taxRate').value) || 0;
    const taxAmount = subtotal * (taxRate / 100);
    const total = subtotal + taxAmount;
    
    document.getElementById('subtotalDisplay').textContent = formatCurrency(subtotal);
    document.getElementById('taxDisplay').textContent = taxRate;
    document.getElementById('taxAmountDisplay').textContent = formatCurrency(taxAmount);
    document.getElementById('totalDisplay').textContent = formatCurrency(total);
}

// Save Invoice
function saveInvoice() {
    const invoiceDate = document.getElementById('invoiceDate').value;
    
    if (!invoiceDate) {
        alert('Mohon isi tanggal invoice!');
        return;
    }
    
    const customerName = document.getElementById('customerName').value.trim();
    const customerAddress = document.getElementById('customerAddress').value.trim();
    
    const subtotal = items.reduce((sum, item) => sum + item.price, 0);
    const taxRate = parseFloat(document.getElementById('taxRate').value) || 0;
    const taxAmount = subtotal * (taxRate / 100);
    const total = subtotal + taxAmount;
    
    const invoiceData = {
        id: editingId || Date.now(),
        invoiceNumber: document.getElementById('invoiceNumber').value || generateInvoiceNumber(),
        date: invoiceDate,
        customerName: customerName || '-',
        customerAddress: customerAddress || '-',
        items: [...items],
        notes: document.getElementById('notes').value,
        tax: taxRate,
        subtotal: subtotal,
        taxAmount: taxAmount,
        total: total
    };
    
    if (editingId) {
        const index = invoices.findIndex(inv => inv.id === editingId);
        invoices[index] = invoiceData;
    } else {
        invoices.push(invoiceData);
    }
    
    saveInvoicesToStorage();
    renderInvoiceTable();
    closeForm();
}

// Render Invoice Table
function renderInvoiceTable() {
    const tbody = document.getElementById('invoiceTableBody');
    
    if (invoices.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" class="text-center empty-state">
                    Belum ada invoice. Klik "Buat Invoice Baru" untuk memulai.
                </td>
            </tr>
        `;
        return;
    }
    
    tbody.innerHTML = invoices.map(invoice => `
        <tr>
            <td><strong>#${invoice.invoiceNumber}</strong></td>
            <td>
                <div class="customer-info">
                    <span class="customer-name">${invoice.customerName || '-'}</span>
                </div>
            </td>
            <td>${formatDate(invoice.date)}</td>
            <td><span class="invoice-total">${formatCurrency(invoice.total)}</span></td>
            <td>
                <div class="actions">
                    <button class="action-btn view" onclick="previewInvoice(${invoice.id})" title="Preview">👁️</button>
                    <button class="action-btn edit" onclick="editInvoice(${invoice.id})" title="Edit">✏️</button>
                    <button class="action-btn delete" onclick="deleteInvoice(${invoice.id})" title="Hapus">🗑️</button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Edit Invoice
function editInvoice(id) {
    const invoice = invoices.find(inv => inv.id === id);
    if (!invoice) return;
    
    editingId = id;
    document.getElementById('formTitle').textContent = 'Edit Invoice';
    
    document.getElementById('invoiceNumber').value = invoice.invoiceNumber;
    document.getElementById('invoiceDate').value = invoice.date;
    document.getElementById('taxRate').value = invoice.tax;
    document.getElementById('customerName').value = invoice.customerName === '-' ? '' : invoice.customerName;
    document.getElementById('customerAddress').value = invoice.customerAddress === '-' ? '' : invoice.customerAddress;
    document.getElementById('notes').value = invoice.notes || '';
    
    items = [...invoice.items];
    renderItems();
    
    document.getElementById('formModal').classList.add('active');
}

// Delete Invoice
function deleteInvoice(id) {
    if (!confirm('Apakah Anda yakin ingin menghapus invoice ini?')) return;
    
    invoices = invoices.filter(inv => inv.id !== id);
    saveInvoicesToStorage();
    renderInvoiceTable();
}

// Preview Invoice
function previewInvoice(id) {
    const invoice = invoices.find(inv => inv.id === id);
    if (!invoice) return;
    
    const content = document.getElementById('previewContent');
    content.innerHTML = `
        <div class="invoice-preview">
            <div class="invoice-header">
                <div class="company-logo-section">
                    <div class="company-logo">
                        <img src="logo-bbl.png" alt="PT BIMA BINTANG LOGISTIK" class="logo-img">
                    </div>
                    <div class="company-full-info">
                        <h2 style="margin: 0; font-size: 16px; font-weight: 700; color: #1f2937;">PT BIMA BINTANG LOGISTIK</h2>
                        <p style="margin: 2px 0; font-size: 10px; color: #6b7280;">Cikarang Lake View Blok B7 No.19 Kel. Sukaragam</p>
                        <p style="margin: 2px 0; font-size: 10px; color: #6b7280;">Kec. Serang Baru, Bekasi</p>
                        <p style="margin: 2px 0; font-size: 10px; color: #6b7280;">Telp: (021) 38718018 | Email: bimabintanglogistik@gmail.com</p>
                    </div>
                </div>
                <div class="invoice-title">
                    <h1 style="font-size: 28px; font-weight: 700; color: #1f2937; margin: 0;">INVOICE</h1>
                    <p class="invoice-number" style="color: #6b7280; margin-top: 4px; font-size: 12px;">#${invoice.invoiceNumber}</p>
                </div>
            </div>
            
            <div class="invoice-details">
                <div class="detail-section">
                    <h3 style="font-size: 12px;">Ditagih Kepada:</h3>
                    <p class="name" style="font-size: 12px;">${invoice.customerName}</p>
                    <p style="font-size: 11px;">${invoice.customerAddress}</p>
                </div>
                <div class="detail-section detail-right">
                    <p style="font-size: 12px;"><strong>Tanggal:</strong> ${formatDate(invoice.date)}</p>
                </div>
            </div>
            
            <div class="invoice-items">
                <table>
                    <thead>
                        <tr>
                            <th style="font-size: 11px; padding: 8px;">Deskripsi</th>
                            <th style="font-size: 11px; padding: 8px;">Area - Tujuan</th>
                            <th style="font-size: 11px; padding: 8px;">Kendaraan</th>
                            <th class="text-center" style="font-size: 11px; padding: 8px;">Qty</th>
                            <th style="text-align: right; font-size: 11px; padding: 8px;">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${invoice.items.map(item => `
                            <tr>
                                <td style="font-size: 11px; padding: 8px;">${item.description}</td>
                                <td style="font-size: 11px; padding: 8px;">${item.area} - ${item.destination}</td>
                                <td style="font-size: 11px; padding: 8px;">${item.vehicle}</td>
                                <td class="text-center" style="font-size: 11px; padding: 8px;">${item.quantity}</td>
                                <td style="text-align: right; font-size: 11px; padding: 8px;">${formatCurrency(item.price)}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            
            <div class="invoice-summary">
                <div class="summary-box">
                    <div class="summary-row" style="font-size: 11px;">
                        <span>Subtotal:</span>
                        <span>${formatCurrency(invoice.subtotal)}</span>
                    </div>
                    <div class="summary-row" style="font-size: 11px;">
                        <span>Pajak (${invoice.tax}%):</span>
                        <span>${formatCurrency(invoice.taxAmount)}</span>
                    </div>
                    <div class="summary-row summary-total" style="font-size: 14px;">
                        <span>Total:</span>
                        <span>${formatCurrency(invoice.total)}</span>
                    </div>
                </div>
            </div>
            
            ${invoice.notes ? `
                <div class="invoice-notes">
                    <h3 style="font-size: 11px;">Catatan:</h3>
                    <p style="font-size: 10px;">${invoice.notes}</p>
                </div>
            ` : ''}
            
            <div class="bank-info">
                <h3 style="font-size: 12px; margin-bottom: 8px;">Informasi Pembayaran:</h3>
                <div class="bank-details">
                    <p style="font-size: 10px;"><strong>Bank:</strong> Mandiri</p>
                    <p style="font-size: 10px;"><strong>Atas Nama:</strong> PT. BIMA BINTANG LOGISTIK</p>
                    <p style="font-size: 10px;"><strong>No. Rekening:</strong> 133-00-3043730-5</p>
                </div>
            </div>
            
            <div class="invoice-footer">
                <p style="font-size: 10px;">Terima kasih atas kepercayaan Anda!</p>
                <p style="font-size: 9px; margin-top: 4px;">PT BIMA BINTANG LOGISTIK - Solusi Logistik Terpercaya</p>
            </div>
        </div>
    `;
    
    document.getElementById('previewModal').classList.add('active');
}

// Close Preview
function closePreview() {
    document.getElementById('previewModal').classList.remove('active');
}

// Print Invoice
function printInvoice() {
    window.print();
}
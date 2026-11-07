import React, { useState } from 'react';
import {
  Search, Filter, Calendar, Building2, MapPin,
  BarChart3, FileText, ChevronRight, TrendingDown,
  LayoutGrid, List, Download, Share2
} from 'lucide-react';

const BidManagementUI = () => {
  const [viewMode, setViewMode] = useState('list');
  const [activeTab, setActiveTab] = useState('all');

  // Dữ liệu mẫu (Mock data)
  const results = [
    {
      id: "TB24001234",
      title: "Mua sắm thiết bị CNTT phục vụ chuyển đổi số năm 2024",
      purchaser: "Cục Công nghệ thông tin - Bộ Tài chính",
      winner: "Công ty CP Giải pháp Phần mềm ABC",
      winPrice: 12500000000,
      bidPrice: 13200000000,
      location: "Hà Nội",
      date: "2024-11-05",
      type: "Hàng hóa",
      method: "Đấu thầu rộng rãi"
    },
    {
      id: "TB24005678",
      title: "Xây lắp đường giao thông nông thôn xã Vinh Quang",
      purchaser: "Ban quản lý dự án đầu tư xây dựng huyện A",
      winner: "Tổng công ty Xây dựng 123",
      winPrice: 4500000000,
      bidPrice: 4600000000,
      location: "TP. Hồ Chí Minh",
      date: "2024-11-04",
      type: "Xây lắp",
      method: "Chào hàng cạnh tranh"
    },
    {
      id: "TB24009999",
      title: "Tư vấn giám sát thi công cầu Nhật Tân giai đoạn 2",
      purchaser: "Bộ Giao thông Vận tải",
      winner: "Liên danh Tư vấn Việt - Nhật",
      winPrice: 890000000,
      bidPrice: 950000000,
      location: "Hà Nội",
      date: "2024-11-03",
      type: "Tư vấn",
      method: "Đấu thầu rộng rãi"
    }
  ];

  const formatCurrency = (val) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg shadow-lg shadow-blue-200">
              <BarChart3 className="text-white w-5 h-5" />
            </div>
            <h1 className="font-bold text-xl tracking-tight hidden md:block">
              EGP <span className="text-blue-600">Analytics</span>
            </h1>
          </div>

          <div className="flex-1 max-w-xl mx-8 hidden sm:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Tìm mã thông báo, tên gói thầu, bên mời thầu..."
                className="w-full bg-slate-100 border border-transparent rounded-full py-2 pl-10 pr-4 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-slate-100 rounded-xl text-slate-500 transition-colors">
              <Download className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl flex items-center justify-center font-bold text-xs shadow-md shadow-blue-200">
              AD
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Kết quả lựa chọn nhà thầu</h2>
          <p className="text-slate-500 text-sm mt-1">Cập nhật dữ liệu thời gian thực từ Hệ thống mạng đấu thầu quốc gia.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Gói thầu mới</span>
            </div>
            <div className="flex items-baseline gap-2">
              <div className="text-3xl font-bold text-slate-900">1,284</div>
              <div className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">↑ 12.5%</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
                <TrendingDown className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Tiết kiệm TB</span>
            </div>
            <div className="flex items-baseline gap-2">
              <div className="text-3xl font-bold text-slate-900">5.82%</div>
              <div className="text-xs text-slate-400 font-medium">Bình quân năm</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Tâm điểm</span>
            </div>
            <div className="flex items-baseline gap-2">
              <div className="text-3xl font-bold text-slate-900">Hà Nội</div>
              <div className="text-xs text-orange-600 font-medium">+24 gói mới</div>
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
          <div className="flex bg-white p-1 rounded-2xl border border-slate-200 shadow-sm overflow-x-auto no-scrollbar">
            {[
              { id: 'all', label: 'Tất cả' },
              { id: 'goods', label: 'Hàng hóa' },
              { id: 'construction', label: 'Xây lắp' },
              { id: 'consulting', label: 'Tư vấn' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-2xl text-sm font-bold hover:bg-slate-50 transition-all shadow-sm">
              <Filter className="w-4 h-4" /> Bộ lọc nâng cao
            </button>
            <div className="h-10 w-[1px] bg-slate-200 mx-1 hidden md:block" />
            <div className="flex bg-slate-200/50 p-1.5 rounded-2xl shadow-inner">
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-xl transition-all ${viewMode === 'list' ? 'bg-white shadow-md text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
              >
                <List className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-white shadow-md text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Area */}
        <div className={viewMode === 'list' ? 'space-y-4' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'}>
          {results.map((item) => (
            <div
              key={item.id}
              className={`bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-900/5 transition-all group overflow-hidden ${
                viewMode === 'list' ? 'rounded-2xl p-6 flex flex-col md:flex-row gap-8 items-start' : 'rounded-[2rem] flex flex-col'
              }`}
            >
              <div className={viewMode === 'list' ? 'flex-1 w-full' : 'p-8 flex-1 w-full'}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-black uppercase tracking-widest rounded-lg border border-blue-100">
                      {item.id}
                    </span>
                    <span className={`px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-lg border ${
                      item.type === 'Hàng hóa' ? 'bg-purple-50 text-purple-700 border-purple-100' :
                      item.type === 'Xây lắp' ? 'bg-orange-50 text-orange-700 border-orange-100' :
                      'bg-indigo-50 text-indigo-700 border-indigo-100'
                    }`}>
                      {item.type}
                    </span>
                  </div>
                  {viewMode === 'grid' && (
                    <button className="text-slate-300 hover:text-blue-500 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

                <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-blue-600 transition-colors mb-4 leading-tight">
                  {item.title}
                </h3>

                <div className="space-y-3 text-[13px]">
                  <div className="flex items-start gap-3 text-slate-500">
                    <Building2 className="w-4 h-4 mt-0.5 shrink-0 text-slate-400" />
                    <div className="leading-relaxed">
                      <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">Bên mời thầu</div>
                      <span className="line-clamp-1 font-medium">{item.purchaser}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-slate-900">
                    <div className="bg-emerald-500 w-1.5 h-1.5 rounded-full mt-2 shrink-0 animate-pulse" />
                    <div className="leading-relaxed">
                      <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-0.5">Nhà thầu trúng</div>
                      <span className="line-clamp-1 font-bold text-slate-800">{item.winner}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`shrink-0 ${
                viewMode === 'list'
                  ? 'md:w-72 md:border-l md:border-slate-100 md:pl-8 flex flex-col justify-center h-full self-stretch'
                  : 'bg-slate-50/80 p-8 border-t border-slate-100'
              }`}>
                <div className="mb-6">
                  <div className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-1.5">Giá trúng thầu</div>
                  <div className="text-2xl font-black text-blue-600 tracking-tight">{formatCurrency(item.winPrice)}</div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[11px] font-bold rounded-md mt-2">
                    <TrendingDown className="w-3.5 h-3.5" />
                    Tiết kiệm {(((item.bidPrice - item.winPrice) / item.bidPrice) * 100).toFixed(1)}%
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 mt-auto">
                  <div className="flex flex-col gap-1.5 text-slate-400">
                    <div className="flex items-center gap-2 text-[11px] font-bold">
                      <MapPin className="w-3 h-3 text-blue-500" /> {item.location}
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-bold">
                      <Calendar className="w-3 h-3 text-blue-500" /> {item.date}
                    </div>
                  </div>
                  <button className="flex items-center justify-center w-10 h-10 bg-slate-900 text-white rounded-2xl hover:bg-blue-600 hover:scale-110 transition-all shadow-lg shadow-slate-200">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 flex justify-center">
          <button className="px-8 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all shadow-sm">
            Xem thêm kết quả
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 bg-white border-t border-slate-200 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-50">
            <div className="bg-slate-900 p-1.5 rounded-lg">
              <BarChart3 className="text-white w-4 h-4" />
            </div>
            <span className="font-bold text-sm">EGP Analytics v2.0</span>
          </div>
          <div className="text-slate-400 text-xs font-medium">
            © 2024 Dữ liệu trích xuất từ Hệ thống mạng đấu thầu quốc gia.
          </div>
          <div className="flex gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-blue-600 transition-colors">Điều khoản</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Bảo mật</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Liên hệ</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BidManagementUI;

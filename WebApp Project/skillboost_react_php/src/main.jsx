//Vào đây để định tuyến trang web
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TrangChu from './pages/TrangChu.jsx'
import './index.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import TrangChu_DSKhoaHoc from './pages/TrangChu_DSKhoaHoc.jsx'
import DangNhap from './pages/DangNhap.jsx'
import Chitietkhoahoc from './pages/Chitietkhoahoc.jsx'

import Dashboard from './pages/Dashboard.jsx'

import DSLead_BangLead from './pages/DSLead_BangLead.jsx'
import DSLead_XemChiTietLead from './pages/DSLead_XemChiTietLead.jsx'
import DSLead_TaoLead from './pages/DSLead_TaoLead.jsx'
import DSLead_ChinhSuaChiTietLead from './pages/DSLead_ChinhSuaChiTietLead.jsx'
import DSLead_HuyTheoDoiLead from './pages/DSLead_HuyTheoDoiLead.jsx'

import DSBaoGia_BangBaoGia from './pages/DSBaoGia_BangBaoGia.jsx'
import DSBaoGia_XemChiTietBaoGia from './pages/DSBaoGia_XemChiTietBaoGia.jsx'
import DSBaoGia_TaoBaoGia from './pages/DSBaoGia_TaoBaoGia.jsx'
import DSBaoGia_ChinhSuaBaoGia from './pages/DSBaoGia_ChinhSuaBaoGia.jsx'

import DSHoatDongLead_BangHoatDong from './pages/DSHoatDongLead_BangHoatDong.jsx'
import DSHoatDongLead_XemChiTietHoatDong from './pages/DSHoatDongLead_XemChiTietHoatDong.jsx'
import DSHoatDongLead_TaoHoatDong from './pages/DSHoatDongLead_TaoHoatDong.jsx'
import DSHoatDongLead_ChinhSuaHoatDong from './pages/DSHoatDongLead_ChinhSuaHoatDong.jsx'

import DSKhachHang_BangKH from './pages/DSKhachHang_BangKH.jsx'
import DSKhachHang_TaoKH from './pages/DSKhachHang_TaoKH.jsx'
import DSKhachHang_XemChiTietKH from './pages/DSKhachHang_XemChiTietKH.jsx'
import DSKhachHang_ChinhSuaKhachHang from './pages/DSKhachHang_ChinhSuaKhachHang.jsx'

import DSQuyDinhGiamGia from './pages/DSQuyDinhGiamGia.jsx'
import DSQDGG_TaoQuyDinhGiamGia from './pages/DSQDGG_TaoQuyDinhGiamGia.jsx'
import DSQDGG_XemChiTietQuyDinhGiamGia from './pages/DSQDGG_XemChiTietQuyDinhGiamGia.jsx'
import DSQDGG_ChinhSuaQuyDinhGiamGia from './pages/DSQDGG_ChinhSuaQuyDinhGiamGia.jsx'

import DSKhoaHoc from './pages/DSKhoaHoc.jsx'
import DSKhoaHoc_TaoKhoaHoc from './pages/DSKhoaHoc_TaoKhoaHoc.jsx'
import DSKhoaHoc_XemChiTietKhoaHoc from './pages/DSKhoaHoc_XemChiTietKhoaHoc.jsx'
import DSKhoaHoc_ChinhSuaKhoaHoc from './pages/DSKhoaHoc_ChinhSuaKhoaHoc.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/trangchu' element={<TrangChu />}></Route>
        <Route path='/khoahoc' element={<TrangChu_DSKhoaHoc />}></Route>
        <Route path='/ITBA_course' element={<Chitietkhoahoc />}></Route>
        <Route path='/dangnhap' element={<DangNhap />}></Route>

        <Route path='/dashboard' element={<Dashboard />}></Route>

        <Route path='/lead/thongtin' element={<DSLead_BangLead />}></Route>
        <Route path='/lead/thongtin/xemchitietlead/:id' element={<DSLead_XemChiTietLead />}></Route>
        <Route path='/lead/thongtin/taolead' element={<DSLead_TaoLead />}></Route>
        <Route path='/lead/thongtin/chinhsuachitietlead/:id' element={<DSLead_ChinhSuaChiTietLead />}></Route>
        <Route path='/lead/thongtin/huytheodoilead/:id' element={<DSLead_HuyTheoDoiLead />}></Route>

        <Route path='/lead/dsbaogia/:leadid' element={<DSBaoGia_BangBaoGia/>}></Route>
        <Route path='/lead/dsbaogia/xemchitietbaogia' element={<DSBaoGia_XemChiTietBaoGia />}></Route>
        <Route path='/lead/dsbaogia/taobaogia/:leadid' element={<DSBaoGia_TaoBaoGia />}></Route>
        <Route path='/lead/dsbaogia/chinhsuabaogia' element={<DSBaoGia_ChinhSuaBaoGia />}></Route>

        <Route path='/lead/dshoatdong' element={<DSHoatDongLead_BangHoatDong />}></Route>
        <Route path='/lead/dshoatdong/xemchitiethoatdong' element={<DSHoatDongLead_XemChiTietHoatDong />}></Route>
        <Route path='/lead/dshoatdong/taohoatdong' element={<DSHoatDongLead_TaoHoatDong />}></Route>
        <Route path='/lead/dshoatdong/chinhsuahoatdong' element={<DSHoatDongLead_ChinhSuaHoatDong />}></Route>

        <Route path='/khachhang' element={<DSKhachHang_BangKH />}></Route>
        <Route path='/khachhang/taokhachhang' element={<DSKhachHang_TaoKH />}></Route>
        <Route path='/khachhang/xemchitietkhachhang/:id' element={<DSKhachHang_XemChiTietKH />}></Route>
        <Route path='/khachhang/chinhsuakhachhang/:id' element={<DSKhachHang_ChinhSuaKhachHang />}></Route>

        <Route path='/dsqdgg' element={<DSQuyDinhGiamGia />}></Route>
        <Route path='/dsqdgg/taodsqdgg' element={<DSQDGG_TaoQuyDinhGiamGia />}></Route>
        <Route path='/dsqdgg/xemchitietdsqdgg/:id' element={<DSQDGG_XemChiTietQuyDinhGiamGia />}></Route>
        <Route path='/dsqdgg/chinhsuadsqdgg/:id' element={<DSQDGG_ChinhSuaQuyDinhGiamGia />}></Route>

        <Route path='/khoahocAdmin' element={<DSKhoaHoc />}></Route>
        <Route path='/khoahocAdmin/taokhoahoc' element={<DSKhoaHoc_TaoKhoaHoc />}></Route>  
        <Route path='/khoahocAdmin/ctkhoahoc/:id' element={<DSKhoaHoc_XemChiTietKhoaHoc />}></Route>
        <Route path='/khoahocAdmin/ctkhoahoc/chinhsua/:id' element={<DSKhoaHoc_ChinhSuaKhoaHoc/>}></Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

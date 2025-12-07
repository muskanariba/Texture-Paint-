import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

import Login from "./admin/Login";
import Dashboard from "./admin/Dashboard";
import ProductsList from "./admin/Products/ProductsList";
import AddProduct from "./admin/Products/AddProduct";
import EditProduct from "./admin/Products/EditProduct";
import EditService from "./admin/Services/EditService";
import AddService from "./admin/Services/AddService";
import ServiceList from "./admin/Services/ServiceList";
import TestimonialList from "./admin/Testimonial/TestimonialList";
import AddTestimonial from "./admin/Testimonial/AddTestimonial";
import EditTestimonial from "./admin/Testimonial/EditTestimonial";
import AdminGalleryAdd from "./admin/Gallery/GalleryAdd";
import AdminGalleryList from "./admin/Gallery/GalleryList";
import AdminGalleryEdit from "./admin/Gallery/GalleryEdit";
import EditHero from "./admin/Hero/EditHero";
import HeroList from "./admin/Hero/HeroList";
import AddHero from "./admin/Hero/AddHero";
import AddAbout from "./admin/About/AddAbout";
import EditAbout from "./admin/About/EditAbout";
import AboutList from "./admin/About/AboutList";
import AddProject from "./admin/Project/AddProject"
import EditProject from "./admin/Project/EditProject"
import ProjectList from "./admin/Project/ProjectList"

export default function App() {
  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <Routes>

        {/* Public Website */}
        <Route
          path="/"
          element={
            <>
              <Navbar />

              <section id="home">
                <Hero />
              </section>

              <section id="about">
                <About />
              </section>

              <section id="products">
                <Products />
              </section>

              <section id="whychooseus">
                <WhyChooseUs />
              </section>

              <section id="gallery">
                <Gallery />
              </section>

              <section id="services">
                <Services />
              </section>

              <section id="testimonials">
                <Testimonials />
              </section>

              <section id="contact">
                <ContactForm />
              </section>

              <Footer />
            </>
          }
        />

        {/* Admin Routes */}
        
         <Route path="/admin/hero" element={<HeroList />} />
         <Route path="/admin/hero/add" element={<AddHero/>} />
<Route path="/admin/hero/edit/:id" element={<EditHero />} />

      <Route path="/admin/about" element={<AboutList />} />
<Route path="/admin/about/add" element={<AddAbout />} />
<Route path="/admin/about/edit/:id" element={<EditAbout />} />


        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />

        <Route path="/admin/products" element={<ProductsList />} />
<Route path="/admin/products/add" element={<AddProduct />} />
<Route path="/admin/products/edit/:id" element={<EditProduct />} />

<Route path="/admin/services" element={<ServiceList />} />
<Route path="/admin/services/add" element={<AddService/>} />
<Route path="/admin/services/edit/:id" element={<EditService />} />

<Route path="/admin/testimonials" element={<TestimonialList />} />
<Route path="admin/testimonials/add" element={<AddTestimonial/>} />
<Route path="/admin/testimonials/edit/:id" element={<EditTestimonial/>} />

<Route path="/admin/gallery" element={<AdminGalleryList />} />
<Route path="/admin/gallery/add" element={<AdminGalleryAdd />} />
<Route path="/admin/gallery/edit/:id" element={<AdminGalleryEdit />} />

  <Route path="/admin/projects" element={<ProjectList />} />
  <Route path="/admin/projects/add" element={<AddProject />} />
  <Route path="/admin/projects/edit/:id" element={<EditProject />} />

      </Routes>
    </div>
  );
}

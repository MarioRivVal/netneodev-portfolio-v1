// -------------------------------------------------------------//
import { useEffect } from "react";
// -------------------------------------------------------------//
// -------------------------------------------------------------//
export const getDataset = (e) => {
  e.preventDefault();

  const parentLink =
    e.target.closest("a[data-section]") ||
    e.target.closest("li[data-section]") ||
    e.target.closest("a[data-title]");

  if (parentLink) {
    if (parentLink.hasAttribute("data-section")) {
      return parentLink.getAttribute("data-section");
    } else if (parentLink.hasAttribute("data-title")) {
      return parentLink.getAttribute("data-title");
    }
  }

  return null;
};
// -------------------------------------------------------------//
// -------------------------------------------------------------//
export const smoothScrolling = (e) => {
  e.preventDefault();
  if (e.target.tagName === "A") {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
};
// -------------------------------------------------------------//
// -------------------------------------------------------------//
export const getCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  return currentYear;
};
// -------------------------------------------------------------//
// -------------------------------------------------------------//
export const useTiltEffect = (elements) => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -20;
      const rotateY = ((x - centerX) / centerX) * 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) `;
      // card.style.transition = "transform 1s ease-out";
    };

    const handleMouseLeave = (e) => {
      const card = e.currentTarget;
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    };

    const cards = document.querySelectorAll(elements);

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);
};

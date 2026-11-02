"use client";
import React, { useState } from "react";
import { SOCIAL_LINKS } from "@/data/navigation";
import { MessageCircle, Facebook, MapPin, Instagram, Youtube } from "lucide-react";

export default function SocialIcons() {
  const [selectedId, setSelectedId] = useState(null);

  const getIcon = (id) => {
    switch (id) {
      case "whatsapp":
        return <MessageCircle size={20} />;
      case "facebook":
        return <Facebook size={20} />;
      case "location":
        return <MapPin size={20} />;
      case "instagram":
        return <Instagram size={20} />;
      case "youtube":
        return <Youtube size={20} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center gap-3">
      {SOCIAL_LINKS.map((item) => {
        const isSelected = selectedId === item.id;
        return (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            onClick={() => setSelectedId(item.id)}
            style={{
              backgroundColor: isSelected ? item.activeColor : undefined,
              borderColor: isSelected ? item.activeColor : undefined,
            }}
            className="w-10 h-10 rounded-full bg-vsBg border border-vsBorder flex items-center justify-center text-white hover:scale-110 transition-all shadow"
            aria-label={item.name}
          >
            {getIcon(item.id)}
          </a>
        );
      })}
    </div>
  );
}
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  experienceGalleryItems,
  type ExperienceGalleryItem,
} from "@/data/experienceGallery";

interface ExperienceGalleryProps {
  isInView: boolean;
}

const ExperienceGallery = ({ isInView }: ExperienceGalleryProps) => {
  const { t } = useLanguage();
  const [selectedItem, setSelectedItem] = useState<ExperienceGalleryItem | null>(
    null,
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-16 lg:mt-20"
      >
        <p className="text-xs font-mono text-primary uppercase tracking-wider mb-3">
          {t("feedback.gallery.eyebrow")}
        </p>
        <h3 className="font-display text-2xl sm:text-3xl font-medium text-foreground">
          {t("feedback.gallery.heading")}
        </h3>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed">
          {t("feedback.gallery.description")}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:items-stretch">
          {experienceGalleryItems.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 + index * 0.06 }}
              onClick={() => setSelectedItem(item)}
              className={`gallery-item group relative w-full overflow-hidden rounded-xl border border-border p-0 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-card ${
                item.featured ? "sm:col-span-2" : ""
              } ${item.matchFeaturedHeight ? "lg:h-full" : ""}`}
            >
              {/* Aspect on inner div — reliable with Framer Motion + absolute img */}
              <div
                className={`relative w-full overflow-hidden ${
                  item.featured
                    ? "aspect-[16/10]"
                    : item.matchFeaturedHeight
                      ? "aspect-[4/3] lg:aspect-auto lg:h-full"
                      : "aspect-[4/3]"
                }`}
              >
                <img
                  src={item.src}
                  alt={t(item.captionKey as any)}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: item.objectPosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 lg:p-5">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-primary">
                    {t(item.labelKey as any)}
                  </p>
                  <p className="mt-1 text-xs font-medium leading-snug text-white sm:text-sm">
                    {t(item.captionKey as any)}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>

      <Dialog
        open={selectedItem !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedItem(null);
        }}
      >
        <DialogContent className="max-w-[calc(100vw-2rem)] border-border bg-card p-0 overflow-hidden sm:max-w-3xl">
          {selectedItem && (
            <>
              <DialogTitle className="sr-only">
                {t(selectedItem.captionKey as any)}
              </DialogTitle>
              <DialogDescription className="sr-only">
                {t(selectedItem.labelKey as any)}
              </DialogDescription>
              <div
                className={`relative w-full overflow-hidden ${
                  selectedItem.featured ? "aspect-[16/10]" : "aspect-[4/3]"
                }`}
              >
                <img
                  src={selectedItem.src}
                  alt={t(selectedItem.captionKey as any)}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ objectPosition: selectedItem.objectPosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                  <p className="text-xs font-mono uppercase tracking-wider text-primary">
                    {t(selectedItem.labelKey as any)}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-white sm:text-base">
                    {t(selectedItem.captionKey as any)}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ExperienceGallery;

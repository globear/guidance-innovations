export interface ExperienceGalleryItem {
  id: string;
  src: string;
  labelKey: string;
  captionKey: string;
  featured?: boolean;
  /** Stretch to match featured row height on lg; keep 4/3 on smaller screens */
  matchFeaturedHeight?: boolean;
  objectPosition?: string;
}

export const experienceGalleryItems: ExperienceGalleryItem[] = [
  {
    id: "ai-summit-speaking",
    src: "/profile_images/AI-Summit-1.jpeg",
    labelKey: "feedback.gallery.items.aiSummitSpeaking.label",
    captionKey: "feedback.gallery.items.aiSummitSpeaking.caption",
    featured: true,
    objectPosition: "center center",
  },
  {
    id: "ai-summit-audience",
    src: "/profile_images/AI-Summit-2.jpg",
    labelKey: "feedback.gallery.items.aiSummitAudience.label",
    captionKey: "feedback.gallery.items.aiSummitAudience.caption",
    matchFeaturedHeight: true,
    objectPosition: "center 25%",
  },
  {
    id: "cursor-meetup-venue",
    src: "/profile_images/cursor-meet-up-2.jpeg",
    labelKey: "feedback.gallery.items.cursorMeetupVenue.label",
    captionKey: "feedback.gallery.items.cursorMeetupVenue.caption",
    objectPosition: "center center",
  },
  {
    id: "cursor-meetup-build",
    src: "/profile_images/cursor-meet-up-1.jpeg",
    labelKey: "feedback.gallery.items.cursorMeetupBuild.label",
    captionKey: "feedback.gallery.items.cursorMeetupBuild.caption",
    objectPosition: "center center",
  },
  {
    id: "cursor-meetup-session",
    src: "/profile_images/cursor-meet-up-3.jpeg",
    labelKey: "feedback.gallery.items.cursorMeetupSession.label",
    captionKey: "feedback.gallery.items.cursorMeetupSession.caption",
    objectPosition: "center center",
  },
  {
    id: "brew-build-tdp",
    src: "/profile_images/regular-meetup-1.JPG",
    labelKey: "feedback.gallery.items.brewBuildTdp.label",
    captionKey: "feedback.gallery.items.brewBuildTdp.caption",
    objectPosition: "center center",
  },
  {
    id: "brew-build-emsphere",
    src: "/profile_images/regular-meetup-4.JPG",
    labelKey: "feedback.gallery.items.brewBuildEmsphere.label",
    captionKey: "feedback.gallery.items.brewBuildEmsphere.caption",
    objectPosition: "center center",
  },
  {
    id: "startup-session",
    src: "/profile_images/start-up-1.jpeg",
    labelKey: "feedback.gallery.items.startupSession.label",
    captionKey: "feedback.gallery.items.startupSession.caption",
    objectPosition: "center 20%",
  },
];

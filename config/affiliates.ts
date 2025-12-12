export type AffiliateProduct = {
    name: string;
    url: string;
    discountText?: string;
};

export const AFFILIATE_LINKS: Record<string, AffiliateProduct> = {
    mitolyn: {
        name: "Mitolyn",
        url: "https://mitolyn.com/video_01.php?aff_id=123", // Replace with real link
        discountText: "Save $300 on 6-Bottle Pack",
    },
    prodentim: {
        name: "ProDentim",
        url: "https://prodentim.com/text.php?aff_id=123", // Replace with real link
        discountText: "Special Offer: 50% OFF Today",
    },
    ikaria: {
        name: "Ikaria Lean Belly Juice",
        url: "https://leanbellyjuice.com/video.php?aff_id=123", // Replace with real link
        discountText: "Limited Time Discount Available",
    },
    "the-brain-song": {
        name: "The Brain Song",
        url: "https://brainsong.com?aff_id=123", // Replace with real link
    },
    // Add other products here
};

export function getProductLink(slug: string): string {
    // Try to find by direct key or simple fuzzy match
    const key = Object.keys(AFFILIATE_LINKS).find(k => slug.includes(k));
    return key ? AFFILIATE_LINKS[key].url : "#"; // Default fallback
}

export const hsOngWhatsappNumber = "60163132865";

export const inviteMessage =
  "Hi HS Ong, I’m interested in Agent Tools / PropertyDealDesk Match Edition. Can you show me the private beta?";

export function whatsappMessageUrl(message: string) {
  return `https://wa.me/${hsOngWhatsappNumber}?text=${encodeURIComponent(message)}`;
}

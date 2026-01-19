import { events } from "@/data/events"

export function getEventById(id: string) {
  return events.find((event) => event.id === id)
}

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug)
}

import { getLocalisationKeys } from "$lib/locale";
import { SDK } from "$lib/sdk";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./[slug]/$types";

export const load: PageLoad = async ({ params }) => {
    const eventsResponse = await SDK.items("events").readByQuery({
        limit: 1,
        filter: { status: "published" },
        sort: ['-date'],
        // @ts-ignore
        fields: "*.*",
    });

    if (!eventsResponse.data) throw error(500);

    const translated = eventsResponse.data.map((event) => {
        if (typeof event.translations === "string") throw error(500);
        const keys = getLocalisationKeys(event.slug, event.translations);
        return { event, keys };
    });

    return {
        events: translated,
    };
};


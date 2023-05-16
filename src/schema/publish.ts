import { Static, Type } from "@sinclair/typebox";

export const PublishSchema = Type.Object({
    handle: Type.Array(Type.String()),
    content: Type.String(),
    title: Type.String(),
});

export type PublishType = Static<typeof PublishSchema>;

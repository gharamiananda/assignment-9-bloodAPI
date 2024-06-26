
import { z } from "zod";

const createRequest = z.object({
    body: z.object({
        donorId: z.string({
            required_error:"donorId field is required."
        }),
        phoneNumber: z.string({
            required_error:"phoneNumber field is required."
        })
        , dateOfDonation: z.string({
            required_error:"dateOfDonation field is required."
        }), hospitalName: z.string({
            required_error:"hospitalName field is required."
        }), hospitalAddress: z.string({
            required_error:"hospitalAddress field is required."
        }), reason: z.string({
            required_error:"reason field is required."
        }),
    })
});

const updateStatusRequest = z.object({
    body: z.object({
        status: z.enum([...Object.values(['PENDING' , 'APPROVED' , 'REJECTED'])] as [string, ...string[]]),

    })
});

export const statusValidationSchemas = {
    createRequest,
    updateStatusRequest
}
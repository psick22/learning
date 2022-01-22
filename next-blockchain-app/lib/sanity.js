import { SanityClient } from "@sanity/client";

export const client = SanityClient({
  projectId: "mhqhcoe1",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skEmuQ4TVlRDIKnQS03JymslI87trK7OgFIp5pzUS7z7oqEK8BVRMUhl3OzzdXnvOOBPMPOdY2ef0uhgCpIBdiznh6HHewKWlA8e5MT18Mx79E7oLQPwLKVYPPibGkxMHnEIaoAqpSSKilMyoD5chYzJX7gMqaKpEbJzsZUMHNQP23pDy4za",
  useCdn: false,
});

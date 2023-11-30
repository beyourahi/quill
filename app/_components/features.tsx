import { FeaturesHeader } from "./features-header";
import { FeaturesImage } from "./features-image";
import { FeaturesList } from "./features-list";

export const Features = () => (
    <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <FeaturesHeader />
        <FeaturesList />
        <FeaturesImage />
    </div>
);

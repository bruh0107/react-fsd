import { type ComponentType, type FC, lazy, Suspense } from "react";

interface Props {
    name: string;
}

const modules = import.meta.glob("@/assets/icons/*.svg", {
    query: "?react",
});

const icons = Object.fromEntries(
    Object.entries(modules).map(([path, importer]) => [
        path,
        lazy(importer as () => Promise<{ default: ComponentType }>),
    ])
);

const AppIcon: FC<Props> = ({ name }) => {
    const SvgComponent = icons[`/src/assets/icons/${name}.svg`];

    if (!SvgComponent) {
        return null;
    }

    return (
        <Suspense fallback={null}>
            <SvgComponent />
        </Suspense>
    );
};

export default AppIcon
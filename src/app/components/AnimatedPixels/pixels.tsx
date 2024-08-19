import FlickeringGrid from '@/app/components/magicui/flickering-grid';

export function FlickeringGridRounded() {
    return (
        <div className="absolute h-full w-full overflow-hidden rounded-lg bg-background">
            <FlickeringGrid
                squareSize={4}
                gridGap={6}
                color="#e7e7e7"
                maxOpacity={0.5}
                flickerChance={0.1}
                height={800}
                width={2000}
            />
        </div>
    );
}

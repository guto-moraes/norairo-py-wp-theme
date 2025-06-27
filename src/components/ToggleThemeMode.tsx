import useThemeMode from "@/hooks/useThemeMode";
import { Icons } from "@/components/icons/";
import cn from "@/utils/cn";

const ToggleThemeMode = () => {
  const [theme, setTheme] = useThemeMode();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="rounded-full bg-primary-800 dark:bg-white/10 shadow-inner p-0.5 h-5 w-10 relative">
      <button
        type="button"
        className={cn(
          "rounded-full size-4 absolute grid place-content-center",
          "cursor-pointer transition-all duration-300",
          theme === "dark" ? "translate-x-5" : "translate-x-0"
        )}
        onClick={toggleTheme}
        title={
          theme === "dark"
            ? "Mudar para o tema claro"
            : "Mudar para o tema escuro"
        }
      >
        {theme === "dark" ? (
          <Icons.Sun className="size-4 fill-yellow-400" />
        ) : (
          <Icons.Moon className="size-4 fill-white" />
        )}
      </button>
    </div>
  );
};

export default ToggleThemeMode;

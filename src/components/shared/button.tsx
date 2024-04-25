function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="w-full flex items-center justify-center bg-primary-orange hover:bg-opacity-70 font-bold rounded-lg h-14">
      {children}
    </button>
  );
}

export default Button
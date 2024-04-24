function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="block bg-primary-orange hover:bg-opacity-70 font-bold rounded-lg h-14">
      {children}
    </button>
  );
}

export default Button
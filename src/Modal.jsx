export function Modal() {
  return (
    <>
      <input type="checkbox" id="modal" className="modal-toggle" />
      <div className="modal">
        <div className="rounded modal-box">
          <label htmlFor="modal" className="absolute rounded btn btn-sm btn-circle btn-ghost right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
          <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
          <input type="text" placeholder="enlace" className="w-full max-w-xs rounded input border-base-300" />
          <div className="modal-action">
            <label htmlFor="modal" className="rounded btn btn-primary">
              add
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

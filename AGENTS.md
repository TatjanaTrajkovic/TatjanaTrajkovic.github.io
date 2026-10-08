<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the personal CV as one document at `/` with in-page section navigation; this preserves continuous reading and printing.
- Keep CV printing browser-native with a dedicated print stylesheet; this avoids a separate PDF generation service.
- Prebundle the CV's UI dependencies in Vite optimizeDeps alongside the template's React entries; this prevents late dependency discovery from replacing the React graph during an active preview session.

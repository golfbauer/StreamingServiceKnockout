Henri Truetsch [206305]
Ansgar Koopmann [205107]

Hinzufügen eines Films: 

1. Innerhalb des "scripts" Ordner wird die data.js Datei geöffnet.
2. Die data.js Datei enthält drei Arrays: "neueFilme", "derzeitBeliebt", "nochmalAnsehen".
3. Je nach Kategorie muss innerhalb der Liste ein neues Objekt angelget werden.
4. Hierfür muss folgende Vorlage verwendet werden:
{
    title: '...',
    director: '...',
    year: '...',
    actors: ['...', '...', '...', ...],
    picture: 'css/images/...', //Das Bild muss in den Ordner css/images hinterleget werden.
    description: '...',
    genre: '...',
    trailerURL: 'https://www.youtube.com/embed/...' //Der String kann entweder leer gelassen werden (trailerURL: ''),
                                                     oder benötigt eine vollständige URL (trailerURL: 'https://www.youtube.com/embed/V75dMMIW2B4' 
                                                     -> Es muss darauf geachtet werden "watch?v=" mit "embed/" zu ersetzen)
}
5. Das Objekt wird am Ende der Liste hinzugefügt. Es darf das Komma am Ende der geschweiften Klammer für das vorhergehende Objekt nicht vergessen werden.
6. Die Datei muss gespeichert werden und die index.html Datei muss neu geladen werden.
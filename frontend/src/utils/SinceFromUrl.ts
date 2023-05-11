export abstract class SinceFromUrl {
  static extract(url?: string): string {
    let since = "0";
    if (url) {
      const pattern = "?since=";
      const extractedText = url.match(/\?since=/);
      if (extractedText?.index) {
        const initialIndex = extractedText.index + pattern.length;
        since = url.substring(initialIndex);
      }
    }
    return since;
  }
}

interface LogoFile {
  ok: boolean;
  status: number;
  svg: string;
}

const logoFiles = new Map<string, Promise<LogoFile>>();

export const requestLogo = (url: string) => {
  if (logoFiles.has(url)) {
    return logoFiles.get(url);
  } else {
    const request = fetch(url).then(async response => {
      if (response.ok) {
        const div = document.createElement('div');
        div.innerHTML = await response.text();
        const svg = div.firstElementChild;

        return {
          ok: response.ok,
          status: response.status,
          svg: svg && svg.tagName.toLowerCase() === 'svg' ? svg.outerHTML : '',
        };
      } else {
        return {
          ok: response.ok,
          status: response.status,
          svg: null,
        };
      }
    });

    logoFiles.set(url, request);
    return request;
  }
};

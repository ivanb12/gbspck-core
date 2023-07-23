import { Readable } from 'stream';
import { downloadOptions } from 'ytdl-core';

declare module 'gbspck-core' {
  interface GBSPCKStreamOptions extends downloadOptions {
      seek?: number;
      encoderArgs?: string[];
      fmt?: string;
      opusEncoded?: boolean;
  }

  namespace gbspck {
    interface trackInfo {
      /**
       * The track title
       */
      title: string;
      /**
       * The track artists
       */
      artist: string;
      /**
       * The track url
       */
      url: string;
      /**
       * The track id
       */
      id: string;
      /**
       * The track uri
       */
      duration?: number;
      /**
       * The track thumbnail
       */
      thumbnail: string;
    }

    /**
     * Gives the information of a track
     */
    function getInfo(url: string): Promise<trackInfo>;
    /**
     * Returns true if url is a spotify track link
     */
    function validateURL(url: string, type?: 'track' | 'album' | 'playlist'): boolean;
    /**
     * Log a warning in the console if gbspck-core is outdated
     */
    function checkUpdate(): Promise<void>;
  }

  /**
   * Downloads the track from the given url. Returns a readable stream
   */
  function gbspck(link: string, options?: GBSPCKStreamOptions): Promise<Readable>;
  
  export default gbspck;
}